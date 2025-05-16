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
  rollNumber?: string;
  kgpMail?: string;
};

type FieldErrors = Partial<Record<string, string>>;

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    collegeName: "",
    otherCollege: "",
    rollNumber: "",
    kgpMail: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const computeCompletion = (data: typeof formData) => {
    if (!data.phoneNumber || !data.collegeName) return false;
    if (data.collegeName === "Indian Institute of Technology, Kharagpur") {
      return !!(data.rollNumber && data.kgpMail);
    }
    return true;
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        if (!res.ok) throw new Error("Failed to fetch profile");
        const json = await res.json();
        const userData = json.data.user;
        setUser(userData);
        const init = {
          phoneNumber: userData.phoneNumber || "",
          collegeName: userData.collegeName || "",
          otherCollege:
            userData.collegeName && userData.collegeName !==
            "Indian Institute of Technology, Kharagpur"
              ? userData.collegeName
              : "",
          rollNumber: userData.rollNumber || "",
          kgpMail: userData.kgpMail || ""
        };
        setFormData(init);
        const complete = computeCompletion(init);
        setIsComplete(complete);
        Cookies.set('profileComplete', complete ? 'yes' : 'no');
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchProfile();
  }, []);

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

    try {
      const payload: any = {
        phoneNumber: formData.phoneNumber,
        collegeName:
          formData.collegeName === 'Other'
            ? formData.otherCollege
            : formData.collegeName
      };
      if (
        formData.collegeName ===
        'Indian Institute of Technology, Kharagpur'
      ) {
        payload.rollNumber = formData.rollNumber;
        payload.kgpMail = formData.kgpMail;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
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
      const nextForm = {
        phoneNumber: updated.phoneNumber || "",
        collegeName: updated.collegeName || "",
        otherCollege:
          updated.collegeName !==
          'Indian Institute of Technology, Kharagpur'
            ? updated.collegeName
            : "",
        rollNumber: updated.rollNumber || "",
        kgpMail: updated.kgpMail || ""
      };
      setFormData(nextForm);
      const complete = computeCompletion(nextForm);
      setIsComplete(complete);
      Cookies.set('profileComplete', complete ? 'yes' : 'no');
      setSuccess('Profile updated successfully.');
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Updated handleLogout to redirect to dashboard
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;
  if (!user) return <div className="text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-theme-background pt-16">
      <Navbar />
      <div className="flex items-center justify-center py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-theme-card p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-theme-primary">Profile</h1>

          <div className="text-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isComplete
                  ? 'bg-theme-success text-theme-success-text'
                  : 'bg-theme-warning text-theme-warning-text'
              }`}
            >
              Profile {isComplete ? 'Complete' : 'Incomplete'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-theme-secondary">Username</label>
              <input
                type="text"
                value={user.userName}
                disabled
                className="w-full p-2 border rounded bg-theme-input-disabled"
              />
            </div>
            <div>
              <label className="block text-theme-secondary">Email</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full p-2 border rounded bg-theme-input-disabled"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-theme-secondary">Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-theme-input text-theme-input-text"
            />
            {fieldErrors.phoneNumber && (
              <p className="text-theme-error text-sm mt-1">
                {fieldErrors.phoneNumber}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-theme-secondary">College</label>
            <select
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-theme-input text-theme-input-text"
            >
              <option value="">Select college</option>
              <option value="Indian Institute of Technology, Kharagpur">
                Indian Institute of Technology, Kharagpur
              </option>
              <option value="Other">Other</option>
            </select>
            {fieldErrors.collegeName && (
              <p className="text-theme-error text-sm mt-1">
                {fieldErrors.collegeName}
              </p>
            )}
          </div>

          {formData.collegeName === 'Other' && (
            <div className="mb-4">
              <label className="block text-theme-secondary">Specify College</label>
              <input
                name="otherCollege"
                type="text"
                value={formData.otherCollege}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-theme-input text-theme-input-text"
              />
              {fieldErrors.otherCollege && (
                <p className="text-theme-error text-sm mt-1">
                  {fieldErrors.otherCollege}
                </p>
              )}
            </div>
          )}

          {formData.collegeName === 'Indian Institute of Technology, Kharagpur' && (
            <>
              <div className="mb-4">
                <label className="block text-theme-secondary">Roll Number</label>
                <input
                  name="rollNumber"
                  type="text"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-theme-input text-theme-input-text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-theme-secondary">IIT KGP Email</label>
                <input
                  name="kgpMail"
                  type="email"
                  value={formData.kgpMail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded bg-theme-input text-theme-input-text"
                />
              </div>
            </>
          )}

          {success && <p className="text-theme-success-text">{success}</p>}

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-theme-button-primary text-white p-3 rounded-lg hover:bg-theme-button-primary-hover transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="flex-1 bg-theme-button-danger text-white p-3 rounded-lg hover:bg-theme-button-danger-hover transition"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}