import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function OrderForm() {
  const { addToCart } = useCart();
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    layanan: "",
    alamat: "",
    catatan: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(form);
    alert("Pesanan berhasil ditambahkan ke keranjang!");
    setForm({ nama: "", telepon: "", layanan: "", alamat: "", catatan: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-lightTeal/30 via-white to-softGold/20 py-24 px-6 overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute w-72 h-72 bg-lightTeal/30 blur-3xl rounded-full top-10 left-10 opacity-50 animate-pulse"></div>
      <div className="absolute w-56 h-56 bg-softGold/30 blur-3xl rounded-full bottom-10 right-10 opacity-50 animate-pulse"></div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-serifDisplay text-center text-charcoal mb-3">
          Formulir Pemesanan
        </h2>
        <p className="text-center text-gray-600 font-poppins mb-12">
          Isi data berikut untuk melakukan pemesanan layanan laundry.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border border-lightTeal/30 rounded-2xl shadow-xl p-8 md:p-10 space-y-6 transition-all duration-300"
        >
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Nama Lengkap
            </label>
            <input
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl transition-all outline-none font-poppins"
              placeholder="Masukkan nama Anda"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              No. Telepon
            </label>
            <input
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl transition-all outline-none font-poppins"
              placeholder="Contoh: 08123456789"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Pilih Layanan
            </label>
            <select
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl bg-white transition-all outline-none font-poppins"
              name="layanan"
              value={form.layanan}
              onChange={handleChange}
              required
            >
              <option value="">-- Pilih Layanan --</option>
              <option value="Cuci Kiloan">Cuci Kiloan</option>
              <option value="Cuci Setrika">Cuci Setrika</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
            </select>
          </div>

          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Alamat Lengkap
            </label>
            <textarea
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl transition-all outline-none font-poppins"
              placeholder="Masukkan alamat lengkap untuk pengantaran/pengambilan"
              name="alamat"
              rows={3}
              value={form.alamat}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl transition-all outline-none font-poppins"
              placeholder="Contoh: Tolong gunakan parfum lembut"
              name="catatan"
              rows={2}
              value={form.catatan}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-softGold text-white font-semibold px-10 py-3 rounded-full shadow-md hover:bg-charcoal hover:text-softGold transition-all duration-300 transform hover:scale-105"
            >
              Tambah ke Keranjang 🧺
            </button>

            <Link
              to="/summary"
              className="bg-charcoal text-white font-semibold px-10 py-3 rounded-full shadow-md hover:bg-softGold hover:text-charcoal transition-all duration-300 transform hover:scale-105"
            >
              Lihat Ringkasan Pesanan 🧾
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
