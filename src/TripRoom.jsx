import { useState } from 'react';

export default function TripRoom() {
  // 1. จำลองข้อมูลคนในทริปไปก่อน
  const [members] = useState([
    { uid: 'A', name: 'อลิซ' },
    { uid: 'B', name: 'บ๊อบ' },
    { uid: 'C', name: 'ชาร์ลี' }
  ]);

  // 2. จำลองรายการบิลที่เกิดขึ้น
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'ค่าหมูกระทะ', amount: 1500, payerUid: 'A' },
    { id: 2, title: 'ค่าแท็กซี่', amount: 300, payerUid: 'B' }
  ]);

  return (
    <div className="space-y-6 pb-10 mt-4">
      
      {/* ส่วนหัวของทริป */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">🏖️ ทริปพัทยา</h1>
        <p className="text-gray-500 mt-1">
          สมาชิก {members.length} คน
        </p>
      </div>

      {/* แบ่ง 2 คอลัมน์ (ซ้าย: บิลทั้งหมด, ขวา: สรุปหนี้) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* คอลัมน์ซ้าย: รายการค่าใช้จ่าย */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            🧾 บิลทั้งหมด
          </h2>
          
          {expenses.map(exp => (
            <div key={exp.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">{exp.title}</p>
                <p className="text-sm text-gray-500">จ่ายโดย: {members.find(m => m.uid === exp.payerUid)?.name}</p>
              </div>
              <div className="text-lg font-bold text-gray-800">
                ฿{exp.amount}
              </div>
            </div>
          ))}
        </div>

        {/* คอลัมน์ขวา: เดี๋ยวเราจะเอา Algorithm มาใส่ตรงนี้ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            ✨ สรุปยอดโอน
          </h2>
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
            <p className="text-orange-600 font-semibold">กำลังรอคำนวณการโอนเงิน...</p>
          </div>
        </div>

      </div>
    </div>
  );
}