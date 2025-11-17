import { useCart } from "../context/CartContext";
import axios from "axios";
import { useState } from "react";

export default function OrderSummary() {
  const { cartItems, updateItem, removeFromCart } = useCart();
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => setEditingIndex(index);

  const handleSave = async (index) => {
    const item = cartItems[index];

    try {
      await axios.put(`http://localhost:5000/api/orders/${item.id}`, item);
      alert("Berhasil disimpan ke database!");
      setEditingIndex(null);
    } catch (err) {
      console.error(err);
      alert("Gagal update pesanan!");
    }
  };

  const handleDelete = async (item, index) => {
    if (!confirm("Hapus item ini?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/orders/${item.id}`);
      removeFromCart(index);
      alert("Berhasil dihapus dari database!");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus pesanan!");
    }
  };

  const formatRupiah = (num) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-lightTeal/20 via-white to-softGold/20 min-h-screen relative overflow-hidden">
      {/* Background dekorasi */}
      <div className="absolute w-72 h-72 bg-lightTeal/30 blur-3xl rounded-full top-10 left-10 opacity-50"></div>
      <div className="absolute w-56 h-56 bg-softGold/30 blur-3xl rounded-full bottom-10 right-10 opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-serifDisplay text-center text-charcoal mb-10 drop-shadow">
          Ringkasan Pesanan Anda
        </h2>

        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-10 border border-lightTeal/30">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-poppins py-10">
              Belum ada pesanan di keranjang 🧺
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-poppins">
                <thead>
                  <tr className="bg-lightTeal/20 text-charcoal border-b">
                    <th className="p-3">Nama</th>
                    <th className="p-3">Layanan</th>
                    <th className="p-3">Jumlah</th>
                    <th className="p-3">Telepon</th>
                    <th className="p-3">Alamat</th>
                    <th className="p-3">Catatan</th>
                    <th className="p-3 text-right">Estimasi</th>
                    <th className="p-3 text-center">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, index) => {
                    const isEditing = editingIndex === index;

                    return (
                      <tr
                        key={index}
                        className="border-b hover:bg-lightTeal/10 transition"
                      >
                        <td className="p-2">
                          <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.nama}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                nama: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td className="p-2">
                          <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.layanan}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                layanan: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td className="p-2 w-20">
                          <input
                            type="number"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border text-center ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.jumlah}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                jumlah: Number(e.target.value),
                              })
                            }
                          />
                        </td>

                        <td className="p-2">
                          <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.telepon}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                telepon: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td className="p-2">
                          <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.alamat}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                alamat: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td className="p-2">
                          <input
                            type="text"
                            disabled={!isEditing}
                            className={`w-full p-2 rounded-md border ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.catatan}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                catatan: e.target.value,
                              })
                            }
                          />
                        </td>

                        <td className="p-2 text-right">
                          <input
                            type="number"
                            disabled={!isEditing}
                            className={`w-28 p-2 rounded-md border text-right ${
                              isEditing
                                ? "bg-white border-softGold"
                                : "bg-gray-100 border-gray-300"
                            }`}
                            value={item.estimasiBiaya}
                            onChange={(e) =>
                              updateItem(index, {
                                ...item,
                                estimasiBiaya: Number(e.target.value),
                              })
                            }
                          />
                        </td>

                        <td className="p-2 text-center space-x-2">
                          {!isEditing ? (
                            <button
                              onClick={() => handleEdit(index)}
                              className="px-4 py-1.5 rounded-lg bg-softGold text-charcoal font-semibold hover:bg-charcoal hover:text-softGold transition"
                            >
                              Edit
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSave(index)}
                              className="px-4 py-1.5 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                            >
                              Save
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(item, index)}
                            className="px-4 py-1.5 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
