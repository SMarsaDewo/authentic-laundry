import { useCart } from "../context/CartContext";

export default function OrderSummary() {
  const { cartItems, clearCart } = useCart();

  const WHATSAPP_NUMBER = "6285974733004";

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.estimasiBiaya || 0),
      0
    );
  };

  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

  // Kirim ke WhatsApp
  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) return;

    const message = cartItems
      .map(
        (item, index) =>
          `Pesanan ${index + 1}:\nNama: ${item.nama}\nTelepon: ${
            item.telepon
          }\nLayanan: ${item.layanan}\nJumlah: ${item.jumlah || "-"}\nAlamat: ${
            item.alamat
          }\nCatatan: ${item.catatan || "-"}\nEstimasi Biaya: ${formatRupiah(
            item.estimasiBiaya || 0
          )}`
      )
      .join("\n\n");

    const totalText = `\nTotal Estimasi Biaya: ${formatRupiah(
      calculateTotal()
    )}`;
    const finalMessage = `Halo Authentic Laundry!\nSaya ingin memesan layanan berikut:\n\n${message}${totalText}\n\nTerima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };


  
const handleSendToBackend = async () => {
    if (cartItems.length === 0) return alert("Belum ada pesanan!");

    try {
      const response = await axios.post("http://localhost:5000/api/orders", {
        orders: cartItems,
        total: calculateTotal(),
      });

      if (response.status === 201) {
        alert("Pesanan berhasil dikirim ke server ✅");
        clearCart();
      }
    } catch (error) {
      console.error("Gagal kirim pesanan ke backend:", error);
      alert("Terjadi kesalahan saat mengirim pesanan ke server ❌");
    }
  };




  if (cartItems.length === 0) {
    return (
      <section className="py-24 text-center bg-offWhite min-h-screen">
        <h2 className="text-3xl font-serifDisplay text-charcoal mb-4">
          Belum ada pesanan 😅
        </h2>
        <p className="text-gray-600 font-poppins">
          Silakan isi formulir pemesanan terlebih dahulu.
        </p>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-offWhite min-h-screen">
      <h2 className="text-4xl font-serifDisplay text-charcoal text-center mb-10">
        Ringkasan Pesanan Anda
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <table className="w-full text-left font-poppins border-collapse">
          <thead>
            <tr className="border-b text-charcoal">
              <th className="pb-3">Nama</th>
              <th className="pb-3">Layanan</th>
              <th className="pb-3">Jumlah</th>
              <th className="pb-3">Telepon</th>
              <th className="pb-3">Alamat</th>
              <th className="pb-3">Catatan</th>
              <th className="pb-3 text-right">Estimasi Biaya</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b text-gray-700">
                <td className="py-3">{item.nama}</td>
                <td>{item.layanan}</td>
                <td>{item.jumlah || "-"}</td>
                <td>{item.telepon}</td>
                <td>{item.alamat}</td>
                <td>{item.catatan || "-"}</td>
                <td className="text-right">
                  {formatRupiah(item.estimasiBiaya || 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total & Tombol */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-lg font-semibold text-charcoal font-poppins">
            Total Estimasi Biaya:{" "}
            <span className="text-softGold text-xl">
              {formatRupiah(calculateTotal())}
            </span>
          </p>

          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Hapus Semua
            </button>

            <button
              onClick={handleSendToWhatsApp}
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Kirim via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
