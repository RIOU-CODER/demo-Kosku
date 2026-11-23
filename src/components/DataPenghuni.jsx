import { useState, useEffect } from 'react'

function DataPenghuni() {
  // State untuk menyimpan daftar penghuni hasil fetch API
  const [penghuni, setPenghuni] = useState([])
  // State indikator loading saat proses pengambilan data berlangsung
  const [loading, setLoading] = useState(true)
  // State untuk menampung pesan error jika koneksi/API gagal
  const [error, setError] = useState(null)

  useEffect(() => {
    const ambilDataPenghuni = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Gagal mengambil data penghuni dari server')
        }

        const data = await response.json()

        // Ambil 5 data pertama dan sesuaikan strukturnya untuk Kosku
        const daftarTerformat = data.slice(0, 5).map((user, index) => ({
          id: user.id,
          nomorKamar: `A-0${index + 1}`,
          nama: user.name,
          email: user.email,
          asalKota: user.address.city
        }))

        setPenghuni(daftarTerformat)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    ambilDataPenghuni()
  }, []) // Dependency array kosong []: effect hanya jalan 1x saat komponen pertama kali tampil

  return (
    <div className="bg-[#ffffff] p-[25px] border border-[#ddd] rounded-[6px]">
      <div className="flex justify-between items-center mb-[15px] flex-wrap gap-[10px]">
        <h3 className="text-[1.17em] font-bold text-[#2c3e50]">
          3. Daftar Penghuni Kos (Fetch Data Dummy useEffect)
        </h3>
        <span className="text-[0.85rem] bg-[#f9f9f9] border border-[#ddd] px-[10px] py-[4px] rounded-[4px] text-[#555]">
          Sumber: JSONPlaceholder API
        </span>
      </div>

      {/* Tampilan saat data sedang diambil */}
      {loading && (
        <p className="text-center text-[#555] py-[20px] bg-[#f9f9f9] rounded-[6px] border border-[#eee]">
          Memuat data penghuni dari API...
        </p>
      )}

      {/* Tampilan jika terjadi error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-[15px] py-[12px] rounded-[6px]">
          Terjadi kesalahan: {error}
        </div>
      )}

      {/* Tampilan tabel jika data berhasil dimuat */}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[0.95rem]">
            <thead>
              <tr className="bg-[#2c3e50] text-white">
                <th className="p-[12px] rounded-tl-[4px]">Kamar</th>
                <th className="p-[12px]">Nama Penghuni</th>
                <th className="p-[12px]">Email</th>
                <th className="p-[12px]">Asal Kota</th>
                <th className="p-[12px] rounded-tr-[4px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {penghuni.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#eee] hover:bg-[#f9f9f9]"
                >
                  <td className="p-[12px] font-bold text-[#007bff]">
                    {item.nomorKamar}
                  </td>
                  <td className="p-[12px] font-medium text-[#333]">
                    {item.nama}
                  </td>
                  <td className="p-[12px] text-[#555]">{item.email}</td>
                  <td className="p-[12px] text-[#555]">{item.asalKota}</td>
                  <td className="p-[12px]">
                    <span className="bg-green-100 text-green-800 text-[0.8rem] font-medium px-[8px] py-[3px] rounded-[4px]">
                      Aktif
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default DataPenghuni