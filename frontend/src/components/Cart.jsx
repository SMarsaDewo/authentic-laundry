import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const WHATSAPP_NUMBER = "6285974733004";

  // Fungsi untuk kirim ke WhatsApp
  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Susun isi pesan dari cart
    const message = cartItems
      .map(
        (item, index) =>
          `Pesanan ${index + 1}:\nNama: ${item.nama}\nLayanan: ${
            item.layanan
          }\nTelepon: ${item.telepon}\nAlamat: ${item.alamat}`
      )
      .join("\n\n");

    const fullMessage = `Halo Authentic Laundry! Saya ingin memesan layanan berikut:\n\n${message}\n\nTerima kasih!`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Buka di tab baru
    window.open(whatsappLink, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <section id="cart" className="bg-offWhite py-20 px-6 text-center">
        <h2 className="text-3xl font-serifDisplay text-charcoal mb-6">
          Keranjang Pesanan
        </h2>
        <p className="text-gray-600 font-poppins">
          Belum ada pesanan di keranjang.
        </p>
      </section>
    );
  }

  return (
    <section id="cart" className="bg-offWhite py-20 px-6">
      <h2 className="text-3xl font-serifDisplay text-center text-charcoal mb-10">
        Keranjang Pesanan
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <table className="w-full text-left font-poppins">
          <thead>
            <tr className="border-b text-charcoal">
              <th className="pb-2">Nama</th>
              <th className="pb-2">Layanan</th>
              <th className="pb-2">Telepon</th>
              <th className="pb-2">Alamat</th>
              <th className="pb-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b text-gray-700">
                <td className="py-3">{item.nama}</td>
                <td>{item.layanan}</td>
                <td>{item.telepon}</td>
                <td>{item.alamat}</td>
                <td className="text-center">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-softGold transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Hapus Semua
          </button>

          <button
            onClick={handleSendToWhatsApp}
            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Pesan via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
