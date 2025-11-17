import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { createOrder } from "../api/backend";

export default function OrderForm() {
  const { addToCart } = useCart();

  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    layanan: "",
    jumlah: 1,
    alamat: "",
    catatan: "",
  });

  const [estimasiBiaya, setEstimasiBiaya] = useState(0);

  // Daftar harga layanan
  const priceMap = {
    "Cuci Kiloan": 7000,
    "Cuci Setrika": 10000,
    "Dry Cleaning": 25000,
  };

  // Hitung estimasi biaya otomatis
  useEffect(() => {
    const price = priceMap[form.layanan] || 0;
    setEstimasiBiaya(price * form.jumlah);
  }, [form.layanan, form.jumlah]);

  // Fungsi ubah input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "jumlah" ? parseInt(value) || 1 : value,
    });
  };

  // Simpan ke keranjang
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim ke backend dan DAPATKAN ID nya
      const saved = await createOrder({ ...form, estimasiBiaya });

      alert("Pesanan berhasil disimpan ke database!");

      // Masukkan ke cart dengan ID lengkap dari backend
      addToCart(saved.data);

      alert("Pesanan berhasil ditambahkan ke keranjang!");
    } catch (error) {
      console.error("Gagal menyimpan pesanan:", error);
      alert("Gagal menyimpan pesanan!");
    }

    // Reset form
    setForm({
      nama: "",
      telepon: "",
      layanan: "",
      jumlah: 1,
      alamat: "",
      catatan: "",
    });
    setEstimasiBiaya(0);
  };

  // Format ke Rupiah
  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

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
          {/* Nama */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Nama Lengkap
            </label>
            <input
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl outline-none font-poppins"
              placeholder="Masukkan nama Anda"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </div>

          {/* Telepon */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              No. Telepon
            </label>
            <input
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl outline-none font-poppins"
              placeholder="Contoh: 08123456789"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              required
            />
          </div>

          {/* Layanan */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Pilih Layanan
            </label>
            <select
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl bg-white outline-none font-poppins"
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

          {/* Jumlah */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Jumlah (Kg / Pcs)
            </label>
            <input
              type="number"
              min="1"
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl outline-none font-poppins"
              name="jumlah"
              value={form.jumlah}
              onChange={handleChange}
              required
            />
          </div>

          {/* Alamat */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Alamat Lengkap
            </label>
            <textarea
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl outline-none font-poppins"
              placeholder="Masukkan alamat lengkap untuk pengantaran/pengambilan"
              name="alamat"
              rows={3}
              value={form.alamat}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Catatan */}
          <div className="text-left">
            <label className="block text-charcoal font-semibold mb-2 font-poppins">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              className="border border-lightTeal/40 focus:border-softGold focus:ring-2 focus:ring-softGold/40 p-3 w-full rounded-xl outline-none font-poppins"
              placeholder="Contoh: Tolong gunakan parfum lembut"
              name="catatan"
              rows={2}
              value={form.catatan}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Estimasi biaya */}
          <div className="text-center font-poppins text-lg text-charcoal mt-4">
            Estimasi Biaya:{" "}
            <span className="font-semibold text-softGold">
              {formatRupiah(estimasiBiaya)}
            </span>
          </div>

          {/* Tombol */}
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
