import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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

      setOrders(res.data);
    } catch (err) {
      console.log("Gagal ambil data:", err);
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
            {orders.map((order) => (
              <tr key={order.id} className="border-b text-gray-700">
                <td className="py-3">{order.nama}</td>
                <td>{order.layanan}</td>
                <td>{order.jumlah}</td>
                <td>{order.telepon}</td>
                <td>{order.alamat}</td>
                <td>{order.catatan || "-"}</td>
                <td className="text-right">{formatRupiah(order.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Kembali ke Halaman Utama
        </a>
      </div>
    </section>
  );
}
