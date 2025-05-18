"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/navbar"// Import Navbar component

export default function LoginPage() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const isEmail = emailOrUsername.includes("@");
    const payload = isEmail
      ? { email: emailOrUsername.trim(), password }
      : { userName: emailOrUsername.trim(), password };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // if you expect cookies
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      // 1️⃣ Email‐not‐verified case
      if (data.success === false &&
          data.message === "Email not verified. New verification OTP has been sent."
      ) {
        if (isEmail) {
          localStorage.setItem("email", emailOrUsername.trim());
        }
        router.push("/auth/verify-email");
        setLoading(false);
        return;
      }

      // 2️⃣ Any other non‐OK response
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // 3️⃣ Success case: store tokens & redirect
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      router.push("/profile");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-theme-background pt-16">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-all">
          <span className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent shadow-2xl"></span>
        </div>
      )}
      <Navbar />
      <div className={`flex items-center justify-center py-8 ${loading ? 'pointer-events-none select-none blur-sm' : ''}`}>
        <form
          onSubmit={handleLogin}
          className="bg-theme-card p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-theme-primary">Login</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email or Username</label>
            <input
              type="text"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition duration-300" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
