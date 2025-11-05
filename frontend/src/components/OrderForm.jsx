import { useState } from "react";

export default function OrderForm() {
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
    alert("Pesanan berhasil dikirim! (Simulasi frontend)");
    setForm({ nama: "", telepon: "", layanan: "", alamat: "", catatan: "" });
  };

  return (
    <section
      id="order"
      className="py-20 px-6 bg-gradient-to-r from-lightTeal to-softGold text-center text-pureWhite"
    >
      <h2 className="text-3xl font-serifDisplay mb-6 drop-shadow-lg">
        Formulir Pemesanan
      </h2>
      <p className="text-pureWhite/90 mb-10">
        Lengkapi data berikut untuk melakukan pemesanan layanan laundry kami.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-pureWhite rounded-2xl shadow-2xl p-8 space-y-6 text-charcoal"
      >
        <input
          className="border border-gray-200 p-3 w-full rounded-md focus:ring-2 focus:ring-softGold outline-none"
          placeholder="Nama Lengkap"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          required
        />
        <input
          className="border border-gray-200 p-3 w-full rounded-md focus:ring-2 focus:ring-softGold outline-none"
          placeholder="No. Telepon"
          name="telepon"
          value={form.telepon}
          onChange={handleChange}
          required
        />
        <select
          className="border border-gray-200 p-3 w-full rounded-md focus:ring-2 focus:ring-softGold outline-none"
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
        <textarea
          className="border border-gray-200 p-3 w-full rounded-md focus:ring-2 focus:ring-softGold outline-none"
          placeholder="Alamat Lengkap"
          name="alamat"
          value={form.alamat}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          className="border border-gray-200 p-3 w-full rounded-md focus:ring-2 focus:ring-softGold outline-none"
          placeholder="Catatan Tambahan"
          name="catatan"
          value={form.catatan}
          onChange={handleChange}
        ></textarea>
        <button className="w-full bg-softGold hover:bg-lightTeal text-pureWhite font-semibold py-3 rounded-md transition-all duration-300">
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}
