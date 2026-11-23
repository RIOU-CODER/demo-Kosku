import { useState } from 'react'

function ChecklistTugas() {
  // State array untuk menyimpan daftar tugas kos
  const [daftarTugas, setDaftarTugas] = useState([
    { id: 1, teks: 'Cek token listrik & meteran lantai 1', selesai: true },
    { id: 2, teks: 'Perbaiki keran air kamar B-02', selesai: false },
    { id: 3, teks: 'Kirim pengingat tagihan sewa bulan ini', selesai: false }
  ])

  // State string untuk menampung ketikan di input teks (Controlled Input)
  const [inputBaru, setInputBaru] = useState('')

  // 1. Tambah tugas baru menggunakan Spread Operator [...]
  const tambahTugas = (e) => {
    e.preventDefault() // Mencegah browser reload saat form di-submit

    if (inputBaru.trim() === '') return // Cegah input kosong masuk ke daftar

    const tugasBaru = {
      id: Date.now(), // ID unik sederhana dari timestamp
      teks: inputBaru.trim(),
      selesai: false
    }

    // Buat array baru berisi data lama + tugasBaru (Immutable)
    setDaftarTugas([...daftarTugas, tugasBaru])
    setInputBaru('') // Kosongkan kembali kolom input
  }

  // 2. Ubah status selesai/belum menggunakan .map()
  const toggleSelesai = (idTarget) => {
    const daftarTerbaru = daftarTugas.map((item) =>
      item.id === idTarget ? { ...item, selesai: !item.selesai } : item
    )
    setDaftarTugas(daftarTerbaru)
  }

  // 3. Hapus tugas dari daftar menggunakan .filter()
  const hapusTugas = (idTarget) => {
    const sisaTugas = daftarTugas.filter((item) => item.id !== idTarget)
    setDaftarTugas(sisaTugas)
  }

  const jumlahSelesai = daftarTugas.filter((item) => item.selesai).length

  return (
    <div className="bg-[#ffffff] p-[25px] border border-[#ddd] rounded-[6px]">
      <div className="flex justify-between items-center mb-[15px] flex-wrap gap-[10px]">
        <h3 className="text-[1.17em] font-bold text-[#2c3e50]">
          2. Checklist Operasional Kos (To-Do List useState)
        </h3>
        <span className="text-[0.85rem] bg-[#f9f9f9] border border-[#ddd] px-[10px] py-[4px] rounded-[4px] text-[#555]">
          Selesai: {jumlahSelesai} / {daftarTugas.length} Tugas
        </span>
      </div>

      {/* Form Input Tambah Tugas */}
      <form onSubmit={tambahTugas} className="flex gap-[10px] mb-[20px]">
        <input
          type="text"
          value={inputBaru}
          onChange={(e) => setInputBaru(e.target.value)}
          placeholder="Tulis tugas baru (misal: Bersihkan tandon air)..."
          className="flex-1 border border-[#ddd] rounded-[4px] px-[12px] py-[8px] text-[#333] focus:outline-none focus:border-[#007bff]"
        />
        <button
          type="submit"
          className="bg-[#007bff] text-white px-[18px] py-[8px] rounded-[4px] font-medium hover:bg-blue-600 cursor-pointer"
        >
          Tambah
        </button>
      </form>

      {/* Daftar Item Tugas */}
      {daftarTugas.length === 0 ? (
        <p className="text-center text-[#555] py-[20px] bg-[#f9f9f9] rounded-[6px] border border-[#eee]">
          Belum ada daftar tugas operasional kos.
        </p>
      ) : (
        <ul className="flex flex-col gap-[10px]">
          {daftarTugas.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-[#f9f9f9] px-[15px] py-[12px] rounded-[6px] border border-[#eee]"
            >
              <label className="flex items-center gap-[12px] cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={item.selesai}
                  onChange={() => toggleSelesai(item.id)}
                  className="w-[16px] h-[16px] accent-[#007bff] cursor-pointer"
                />
                <span
                  className={
                    item.selesai
                      ? 'line-through text-[#888]'
                      : 'text-[#333] font-medium'
                  }
                >
                  {item.teks}
                </span>
              </label>

              <button
                onClick={() => hapusTugas(item.id)}
                className="text-[0.85rem] text-red-600 hover:text-red-800 font-medium px-[8px] py-[4px] cursor-pointer"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ChecklistTugas