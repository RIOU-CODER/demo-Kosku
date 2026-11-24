// Nanti import 3 komponen tugasmu di bagian paling atas ini:
import CounterKamar from './components/CounterKamar'
import ChecklistTugas from './components/ChecklistTugas'
import DataPenghuni from './components/DataPenghuni'

function App() {
  const brandName = "Kosku"

  return (
    <div className="font-sans text-[#333] leading-[1.6] bg-[#f9f9f9] m-0 p-0 box-border min-h-screen">
      {/* HEADER */}
      <header className="flex justify-between items-center bg-[#ffffff] px-[40px] py-[20px] border-b border-[#ddd]">
        <div className="text-[1.25rem] font-bold text-[#2c3e50]">{brandName}</div>
        <nav className="flex gap-[20px]">
          <a href="#beranda" className="no-underline text-[#555] font-medium hover:text-[#007bff]">
            Beranda
          </a>
          <a href="#fitur" className="no-underline text-[#555] font-medium hover:text-[#007bff]">
            Fitur
          </a>
          <a href="#tugas-hooks" className="no-underline text-[#555] font-medium hover:text-[#007bff]">
            Demo Hooks
          </a>
        </nav>
      </header>

      {/* MAIN BODY */}
      <main>
        {/* Section 1: Pengenalan */}
        <section id="beranda" className="bg-[#ffffff] py-[270px] px-[40px] text-center border-b border-[#eee]">
          <h1 className="text-[2rem] font-bold mb-[15px] text-[#2c3e50]">
            Kelola Kos Jadi Lebih Mudah
          </h1>
          <p>
            Aplikasi manajemen kos modern untuk mempermudah pencatatan kamar, pembayaran bulanan, dan pengelolaan penghuni secara efisien.
          </p>
        </section>

        {/* Section 2: Fitur */}
        <section id="fitur" className="min-h-screen flex flex-col justify-center items-center px-[270px] py-[40px] bg-[#f9f9f9] text-center">
          <h2 className="text-[1.5em] font-bold mb-[30px] text-[#2c3e50]">Fitur Unggulan</h2>
          <div className="flex justify-center gap-[20px] flex-wrap">
            <div className="bg-[#ffffff] p-[25px] border border-[#ddd] rounded-[6px] w-[300px] text-left">
              <h3 className="text-[1.17em] font-bold mb-[10px] text-[#007bff]">Pencatatan Kamar</h3>
              <p>Pantau ketersediaan kamar kos secara real-time dengan status huni yang jelas.</p>
            </div>
            <div className="bg-[#ffffff] p-[25px] border border-[#ddd] rounded-[6px] w-[300px] text-left">
              <h3 className="text-[1.17em] font-bold mb-[10px] text-[#007bff]">Manajemen Pembayaran</h3>
              <p>Catat riwayat pembayaran sewa bulanan penghuni dengan laporan yang terstruktur.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Wadah untuk 3 Komponen Tugas React Hooks */}
        <section id="tugas-hooks" className="py-[60px] px-[40px] bg-[#ffffff] border-t border-[#eee]">
          <h2 className="text-[1.5em] font-bold mb-[30px] text-center text-[#2c3e50]">
            Simulasi Fitur Kosku (React Hooks)
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col gap-[30px]">
            <CounterKamar />
            <ChecklistTugas />
            <DataPenghuni />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="flex justify-between items-start bg-[#2c3e50] text-[#ffffff] p-[40px] gap-[20px]">
        <div className="flex-1">
          <h3 className="text-[1.17em] font-bold">{brandName}</h3>
        </div>
        <div className="flex-1">
          <p className="text-[0.9rem] text-[#bbb]">
            Platform digital sederhana yang dirancang untuk membantu pengelolaan manajemen kos secara praktis dan efisien.
          </p>
        </div>
        <div className="flex-1 text-[0.9rem] text-[#bbb]">
          <p>Kontak: RIOU-CODER@kosku.app</p>
          <p>Bekasi, Jawa Barat</p>
        </div>
      </footer>
    </div>
  )
}

export default App