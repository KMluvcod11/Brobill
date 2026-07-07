import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TripRoom from './TripRoom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-10">
          <div className="font-bold text-2xl tracking-wide">
            Brobill
          </div>
          <button className="text-sm bg-blue-700 px-3 py-1 rounded-full hover:bg-blue-800 transition">
            Dashboard
          </button>
        </nav>

        {/* จุดที่ใช้ Render หน้าเว็บตาม URL */}
        <main className="max-w-3xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<TripRoom />} />
            {/* อนาคตถ้ามีหน้า Dashboard หรือ JoinTrip ก็มาเพิ่ม Route ตรงนี้ */}
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}