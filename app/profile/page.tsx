// app/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Cookies from 'js-cookie';

declare module 'js-cookie';

type User = {
  userName: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  collegeName?: string;
  kgpMail?: string;
  kgpMailVerified?: boolean;
  emailVerified?: boolean;
  isAdmin?: boolean;
  createdAt?: string;
};

type FieldErrors = Partial<Record<string, string>>;

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'kgp-verification' | 'password'>('profile');
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    collegeName: "",
    otherCollege: "",
    kgpMail: ""
  });

  // Password change states (using OTP)
  const [passwordData, setPasswordData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  });

  // KGP verification states
  const [kgpVerificationData, setKgpVerificationData] = useState({
    kgpMail: "",
    otp: ""
  });

  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [passwordOtpSent, setPasswordOtpSent] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);


  const router = useRouter();

  // Check if user is IIT KGP student
  const isIITKGPStudent = formData.collegeName === "Indian Institute of Technology, Kharagpur";

  const computeCompletion = (data: typeof formData, userData: User) => {
    // Must have college name
    if (!data.collegeName) return false;

    // If IIT KGP student, must also have verified KGP email
    if (data.collegeName === "Indian Institute of Technology, Kharagpur") {
      return !!(data.kgpMail && userData.kgpMailVerified);
    }

    // For non-KGP students, just college is enough
    return true;
  };

  const getCompletionMessage = (data: typeof formData, userData: User) => {
    if (!data.collegeName) return "Please select your college";

    if (data.collegeName === "Indian Institute of Technology, Kharagpur") {
      if (!data.kgpMail) return "Please add your IIT KGP email";
      if (!userData.kgpMailVerified) return "Please verify your IIT KGP email";
    }

    return "Profile completed";
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 401) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          router.push("/auth/login");
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch profile");

        const json = await res.json();
        const userData = json.data.user;
        setUser(userData);

        // Handle college name mapping for "Other" colleges
        let displayCollegeName = userData.collegeName || "";
        let otherCollegeName = "";

        if (userData.collegeName && userData.collegeName !== "Indian Institute of Technology, Kharagpur") {
          displayCollegeName = "Other";
          otherCollegeName = userData.collegeName;
        }

        const init = {
          userName: userData.userName || "",
          fullName: userData.fullName || "",
          collegeName: displayCollegeName,
          otherCollege: otherCollegeName,
          kgpMail: userData.kgpMail || ""
        };

        setFormData(init);
        setKgpVerificationData({
          kgpMail: userData.kgpMail || "",
          otp: ""
        });
        setPasswordData({
          email: userData.email || "",
          otp: "",
          newPassword: "",
          confirmPassword: ""
        });

        const complete = computeCompletion(init, userData);
        setIsComplete(complete);
        Cookies.set('profileComplete', complete ? 'yes' : 'no');
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchProfile();
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    setSuccess(null);
    setLoading(true);
    setPasswordSuccess(null);

    try {
      const payload: any = {
        userName: formData.userName,
        fullName: formData.fullName,
        collegeName:
          formData.collegeName === 'Other'
            ? formData.otherCollege
            : formData.collegeName
      };

      const token = localStorage.getItem("accessToken");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        }
      );

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.errors && Array.isArray(json.errors)) {
          const errs: FieldErrors = {};
          json.errors.forEach((err: any) => {
            if (err.path) errs[err.path] = err.message;
          });
          setFieldErrors(errs);
        } else {
          setError(json.message || 'An unexpected error occurred. Please try again.');
        }
        return;
      }

      const updated = json.data.user;
      setUser(updated);

      // Handle college name mapping for "Other" colleges  
      let displayCollegeName = updated.collegeName || "";
      let otherCollegeName = "";

      if (updated.collegeName && updated.collegeName !== "Indian Institute of Technology, Kharagpur") {
        displayCollegeName = "Other";
        otherCollegeName = updated.collegeName;
      }

      const nextForm = {
        userName: updated.userName || "",
        fullName: updated.fullName || "",
        collegeName: displayCollegeName,
        otherCollege: otherCollegeName,
        kgpMail: updated.kgpMail || ""
      };
      setFormData(nextForm);
      const complete = computeCompletion(nextForm, updated);
      setIsComplete(complete);
      Cookies.set('profileComplete', complete ? 'yes' : 'no');
      setSuccess('Profile updated successfully.');

      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordOTP = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    setPasswordSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: passwordData.email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to send OTP");
      }

      setSuccess("Password reset OTP sent to your email!");
      setPasswordOtpSent(true);

      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: passwordData.email,
          otp: passwordData.otp,
          newPassword: passwordData.newPassword
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to change password");
      }

      setPasswordSuccess("Password changed successfully!");
      setPasswordData({
        email: passwordData.email,
        otp: "",
        newPassword: "",
        confirmPassword: ""
      });
      setPasswordOtpSent(false);

      setTimeout(() => setPasswordSuccess(null), 5000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendKgpOTP = async () => {
    if (!kgpVerificationData.kgpMail) {
      setError("Please enter your KGP email address");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);
    setPasswordSuccess(null);

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/send-kgp-mail-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ kgpMail: kgpVerificationData.kgpMail }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to send OTP");
      }

      setSuccess("OTP sent to your KGP email!");
      setOtpSent(true);

      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyKgpEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verify-kgp-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          kgpMail: kgpVerificationData.kgpMail,
          otp: kgpVerificationData.otp
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to verify KGP email");
      }

      const data = await response.json();
      setUser(data.data.user);
      setSuccess("KGP email verified successfully!");
      setOtpSent(false);
      setKgpVerificationData({ ...kgpVerificationData, otp: "" });

      // Update completion status
      if (user) {
        const complete = computeCompletion(formData, data.data.user);
        setIsComplete(complete);
        Cookies.set('profileComplete', complete ? 'yes' : 'no');
      }

      setTimeout(() => setSuccess(null), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setTimeout(() => {
      window.location.href = "/";
    }, 200);
  };

  if (error && !user) {
    return (
      <div className="min-h-screen bg-theme-background pt-16">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center bg-theme-card p-8 rounded-xl max-w-md">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <h2 className="text-xl font-bold text-white mb-2">Profile Error</h2>
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => router.push("/auth/login")}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-theme-background pt-16">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-white text-xl font-medium">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-background pt-16">
      <Navbar />

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            <span className="text-white text-lg font-medium">Processing...</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Profile Completion Alert */}
        {!isComplete && (
          <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              <div>
                <p className="text-yellow-400 font-medium">Profile Incomplete</p>
                <p className="text-yellow-300 text-sm">{getCompletionMessage(formData, user)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-400">{success}</p>
            </div>
          </div>
        )}

        <div className="bg-theme-card rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 p-8 text-center border-b border-gray-700">
            <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-4xl font-bold text-white">
                {user.fullName.charAt(0).toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{user.fullName}</h1>
            <p className="text-gray-300 text-lg mb-4">@{user.userName}</p>

            {/* Status Badges */}
            <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${isComplete
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}
              >
                {isComplete ? (
                  <>
                    <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Profile Complete
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    Profile Incomplete
                  </>
                )}
              </span>

              {user.emailVerified ? (
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-green-500/20 text-green-400 border border-green-500/30">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Email Verified
                </span>
              ) : (
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-red-500/20 text-red-400 border border-red-500/30">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                  Email Unverified
                </span>
              )}

              {user.kgpMailVerified && (
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  IIT KGP Verified
                </span>
              )}

              {user.isAdmin && (
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  Administrator
                </span>
              )}
            </div>
          </div>

          {/* Tab Navigation - Conditionally render KGP verification tab */}
          <div className="border-b border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'profile'
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                Profile Information
              </button>

              {/* Only show KGP verification tab if user selected IIT KGP */}
              {isIITKGPStudent && (
                <button
                  onClick={() => setActiveTab('kgp-verification')}
                  className={`px-6 py-4 font-medium transition-colors ${activeTab === 'kgp-verification'
                      ? 'text-red-400 border-b-2 border-red-400'
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  IIT KGP Verification
                </button>
              )}

              <button
                onClick={() => setActiveTab('password')}
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'password'
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Update Profile Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Username <span className="text-gray-500">(Cannot be changed)</span>
                        </label>
                        <input
                          name="userName"
                          type="text"
                          value={formData.userName}
                          className="w-full p-4 rounded-lg bg-gray-700/50 text-gray-400 border border-gray-600 cursor-not-allowed"
                          disabled={true}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                          disabled={loading}
                        />
                        {fieldErrors.fullName && (
                          <p className="text-red-400 text-sm mt-1">{fieldErrors.fullName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        College <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        disabled={loading}
                      >
                        <option value="">Select college</option>
                        <option value="Indian Institute of Technology, Kharagpur">
                          Indian Institute of Technology, Kharagpur
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      {fieldErrors.collegeName && (
                        <p className="text-red-400 text-sm mt-1">{fieldErrors.collegeName}</p>
                      )}
                    </div>

                    {formData.collegeName === 'Other' && (
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Specify College <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="otherCollege"
                          type="text"
                          value={formData.otherCollege}
                          onChange={handleChange}
                          placeholder="Enter your college name"
                          className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                          disabled={loading}
                        />
                        {fieldErrors.otherCollege && (
                          <p className="text-red-400 text-sm mt-1">{fieldErrors.otherCollege}</p>
                        )}
                      </div>
                    )}

                    {formData.collegeName === "Indian Institute of Technology, Kharagpur" && (
                      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <p className="text-blue-400 text-sm">
                          <strong>IIT KGP students:</strong> Please also verify your institute email in the "IIT KGP Verification" tab to complete your profile.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Saving Changes..." : "Save Changes"}
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Account Information</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                      <label className="block text-gray-400 text-sm font-medium">Email</label>
                      <p className="text-white font-medium text-lg">{user.email}</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg border border-gray-600/30">
                      <label className="block text-gray-400 text-sm font-medium">Member Since</label>
                      <p className="text-white font-medium text-lg">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        }) : "Not available"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KGP Verification Tab - Only show if IIT KGP is selected */}
            {activeTab === 'kgp-verification' && isIITKGPStudent && (
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-6 text-center">IIT KGP Email Verification</h3>

                {user.kgpMailVerified ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">IIT KGP Email Verified</h4>
                    <p className="text-gray-300 mb-4">{user.kgpMail}</p>
                    <p className="text-gray-400 text-sm">Your institute email is verified and active.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        IIT KGP Email (@kgpian.iitkgp.ac.in)
                      </label>
                      <input
                        type="email"
                        value={kgpVerificationData.kgpMail}
                        onChange={(e) => setKgpVerificationData({ ...kgpVerificationData, kgpMail: e.target.value })}
                        className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        placeholder="your.email@kgpian.iitkgp.ac.in"
                        disabled={loading}
                      />
                    </div>

                    {!otpSent ? (
                      <button
                        type="button"
                        onClick={sendKgpOTP}
                        disabled={loading || !kgpVerificationData.kgpMail}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg font-medium transition-colors disabled:opacity-50"
                      >
                        {loading ? "Sending..." : "Send Verification OTP"}
                      </button>
                    ) : (
                      <form onSubmit={verifyKgpEmail} className="space-y-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Enter OTP
                          </label>
                          <input
                            type="text"
                            value={kgpVerificationData.otp}
                            onChange={(e) => setKgpVerificationData({ ...kgpVerificationData, otp: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                            className="w-full p-4 text-center text-2xl tracking-widest rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                            placeholder="000000"
                            maxLength={6}
                            required
                            disabled={loading}
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading || kgpVerificationData.otp.length !== 6}
                          className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                          {loading ? "Verifying..." : "Verify IIT KGP Email"}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Password Tab - Using Email OTP */}
            {activeTab === 'password' && (
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Change Password</h3>
                <p className="text-gray-400 text-center mb-6">
                  We'll send an OTP to your email address to verify your identity before changing your password.
                </p>

                {/* Password Success Message */}
                {passwordSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-400">{passwordSuccess}</p>
                    </div>
                  </div>
                )}


                {!passwordOtpSent ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={passwordData.email}
                        className="w-full p-4 rounded-lg bg-gray-700/50 text-gray-400 border border-gray-600 cursor-not-allowed"
                        disabled={true}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={sendPasswordOTP}
                      disabled={loading}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                      {loading ? "Sending OTP..." : "Send Password Reset OTP"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        OTP Code
                      </label>
                      <input
                        type="text"
                        value={passwordData.otp}
                        onChange={(e) => setPasswordData({ ...passwordData, otp: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                        className="w-full p-4 text-center text-2xl tracking-widest rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        placeholder="000000"
                        maxLength={6}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        required
                        disabled={loading}
                        placeholder="Enter new password (min 6 characters)"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="w-full p-4 rounded-lg bg-black/80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all duration-300"
                        required
                        disabled={loading}
                        placeholder="Confirm new password"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading || passwordData.otp.length !== 6}
                      className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                      {loading ? "Changing Password..." : "Change Password"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Logout Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/25"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
