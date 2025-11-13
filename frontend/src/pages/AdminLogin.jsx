import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔧 Ambil base URL dari environment variable (biar bisa pakai docker compose)
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("Form data dikirim:", form);
      const res = await axios.post(`${API_URL}/auth/login`, form);

      console.log("Response dari backend:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("admin", JSON.stringify(res.data.admin));

        alert("Login berhasil ✅");
        navigate("/dashboard");
      } else {
        setError("Login gagal, token tidak ditemukan ❌");
      }
    } catch (err) {
      console.error("Error response:", err.response?.data);
      setError(err.response?.data?.message || "Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-lightTeal/30 via-white to-softGold/20 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm shadow-xl border border-lightTeal/30 rounded-2xl p-8">
        <h2 className="text-3xl font-serifDisplay text-center text-charcoal mb-2">
          Login Admin
        </h2>
        <p className="text-center text-gray-600 font-poppins mb-8">
          Masuk ke dashboard Authentic Laundry
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-5 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
          <div>
            <label className="block text-charcoal font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full p-3 border border-lightTeal/40 rounded-xl focus:ring-2 focus:ring-softGold focus:border-softGold transition outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-charcoal font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              className="w-full p-3 border border-lightTeal/40 rounded-xl focus:ring-2 focus:ring-softGold focus:border-softGold transition outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-softGold text-white font-semibold py-3 rounded-xl hover:bg-charcoal hover:text-softGold transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Authentic Laundry
        </p>
      </div>
    </section>
  );
}
