import { useCart } from "../context/CartContext";

export default function OrderSummary() {
  const { cartItems, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Belum ada pesanan 😅</h2>
        <p>Silakan isi formulir pemesanan terlebih dahulu.</p>
      </section>
    );
  }

  const order = cartItems[cartItems.length - 1];

  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Ringkasan Pesanan
      </h2>

      <div className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-xl">
        <p><strong>Nama:</strong> {order.nama}</p>
        <p><strong>Telepon:</strong> {order.telepon}</p>
        <p><strong>Layanan:</strong> {order.layanan}</p>
        <p><strong>Alamat:</strong> {order.alamat}</p>
        <p><strong>Catatan:</strong> {order.catatan || "-"}</p>

        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-700 transition w-full"
        >
          Hapus Pesanan
        </button>
      </div>
    </section>
  );
}
