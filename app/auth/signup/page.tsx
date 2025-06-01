"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/navbar"; // Import Navbar component

export default function SignupPage() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    fullName: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      setSuccess(true);
      // Store email in localStorage for verification
      localStorage.setItem("email", formData.email);
      // Redirect to email verification page
      router.push("/auth/verify-email");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-theme-background pt-16">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="text-white text-xl font-semibold">Loading...</div>
        </div>
      )}
      <Navbar />
      <div className="flex flex-col  items-center justify-center py-8">
        <form
          onSubmit={handleSignup}
          className="bg-theme-card p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-theme-primary">Sign Up</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {success && <p className="text-green-500 mb-4 text-center">Registration successful! Please verify your email.</p>}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-3 transition-all duration-300 border border-gray-600 rounded bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 transition-all duration-300 border border-gray-600 rounded bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 transition-all duration-300 border border-gray-600 rounded bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 transition-all duration-300 border border-gray-600 rounded bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg font-semibold transition duration-300" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 text-center text-white">
          Already have an account?{" "}
          <a href="/auth/login" className="text-red-500 hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
