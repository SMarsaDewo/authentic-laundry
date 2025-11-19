import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function DashboardAdmin() {
  // 1. Inisialisasi state dengan array kosong agar aman
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { logout } = useAuth();

  // 2. Pastikan Port mengarah ke 5001 (Host Port)
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num ?? 0);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("📥 Data masuk:", res.data); // Cek Console untuk debug

      // --- 3. LOGIKA ANTI-CRASH (PENTING) ---
      // Kita cari array-nya dimanapun dia berada
      if (Array.isArray(res.data)) {
        setOrders(res.data);
      } else if (res.data && Array.isArray(res.data.data)) {
        setOrders(res.data.data);
      } else {
        console.warn("Format data bukan array, memaksa array kosong.");
        setOrders([]);
      }
    } catch (err) {
      console.error("Gagal ambil data:", err);
      // Jika token expired (401), logout otomatis
      if (
        err.response &&
        (err.response.status === 401 || err.response.status === 403)
      ) {
        logout();
      }
      setOrders([]); // Tetap set array kosong biar tidak blank
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <section className="py-24 text-center bg-offWhite min-h-screen">
        <h2 className="text-3xl font-serifDisplay text-charcoal mb-4">
          Memuat data pesanan...
        </h2>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-offWhite min-h-screen">
      <h2 className="text-4xl font-serifDisplay text-charcoal text-center mb-10">
        Dashboard Admin — Semua Pesanan
      </h2>

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <table className="w-full text-left font-poppins border-collapse">
          <thead>
            <tr className="border-b text-charcoal">
              <th className="pb-3">Nama</th>
              <th className="pb-3">Layanan</th>
              <th className="pb-3">Jumlah</th>
              <th className="pb-3">Telepon</th>
              <th className="pb-3">Alamat</th>
              <th className="pb-3">Catatan</th>
              <th className="pb-3 text-right">Total Biaya</th>
            </tr>
          </thead>

          <tbody>
            {/* --- 4. RENDERING AMAN (PENTING) --- */}
            {/* Cek apakah variable 'orders' benar-benar Array & ada isinya */}
            {Array.isArray(orders) && orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order.id || index} className="border-b text-gray-700">
                  <td className="py-3">{order.nama}</td>
                  <td>{order.layanan}</td>
                  <td>{order.jumlah}</td>
                  <td>{order.telepon}</td>
                  <td>{order.alamat}</td>
                  <td>{order.catatan || "-"}</td>
                  <td className="text-right">
                    {formatRupiah(order.total || order.estimasiBiaya)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-gray-500">
                  Belum ada pesanan masuk.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mr-4"
        >
          Kembali ke Halaman Utama
        </a>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
