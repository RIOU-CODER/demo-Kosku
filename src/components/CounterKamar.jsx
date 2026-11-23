import { useState } from 'react'

function CounterKamar() {
  const totalKamar = 10
  // State untuk menyimpan jumlah kamar yang sedang terisi
  const [kamarTerisi, setKamarTerisi] = useState(4)

  // Dihitung langsung dari state kamarTerisi (tidak perlu state terpisah)
  const kamarKosong = totalKamar - kamarTerisi

  const tambahPenghuni = () => {
    if (kamarTerisi < totalKamar) {
      setKamarTerisi(kamarTerisi + 1)
    }
  }

  const kurangiPenghuni = () => {
    if (kamarTerisi > 0) {
      setKamarTerisi(kamarTerisi - 1)
    }
  }

  const resetHitungan = () => {
    setKamarTerisi(0)
  }

  return (
    <div className="bg-[#ffffff] p-[25px] border border-[#ddd] rounded-[6px] shadow-xs">
      <div className="flex justify-between items-center mb-[15px]">
        <h3 className="text-[1.17em] font-bold text-[#2c3e50]">
          1. Counter Hunian Kamar (useState)
        </h3>
        <span className="text-[0.85rem] bg-[#f9f9f9] border border-[#ddd] px-[10px] py-[4px] rounded-[4px] text-[#555]">
          Total Kapasitas: {totalKamar} Kamar
        </span>
      </div>

      {/* Tampilan Angka */}
      <div className="flex gap-[20px] my-[20px] text-center">
        <div className="flex-1 bg-[#f9f9f9] p-[15px] rounded-[6px] border border-[#eee]">
          <p className="text-[0.9rem] text-[#555]">Kamar Terisi</p>
          <p className="text-[2rem] font-bold text-[#007bff]">{kamarTerisi}</p>
        </div>
        <div className="flex-1 bg-[#f9f9f9] p-[15px] rounded-[6px] border border-[#eee]">
          <p className="text-[0.9rem] text-[#555]">Kamar Kosong</p>
          <p className="text-[2rem] font-bold text-[#2c3e50]">{kamarKosong}</p>
        </div>
      </div>

      {/* Tombol Kontrol */}
      <div className="flex gap-[10px] flex-wrap">
        <button
          onClick={tambahPenghuni}
          disabled={kamarTerisi >= totalKamar}
          className="bg-[#007bff] text-white px-[16px] py-[8px] rounded-[4px] font-medium hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
        >
          + Penghuni Masuk
        </button>

        <button
          onClick={kurangiPenghuni}
          disabled={kamarTerisi <= 0}
          className="bg-[#2c3e50] text-white px-[16px] py-[8px] rounded-[4px] font-medium hover:bg-slate-700 disabled:opacity-50 cursor-pointer"
        >
          - Penghuni Keluar
        </button>

        <button
          onClick={resetHitungan}
          className="bg-[#f9f9f9] text-[#333] border border-[#ddd] px-[16px] py-[8px] rounded-[4px] font-medium hover:bg-gray-200 cursor-pointer"
        >
          Reset (0)
        </button>
      </div>
    </div>
  )
}

export default CounterKamar