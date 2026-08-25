export default function FilterSidebar(){
 return <aside className="bg-white rounded-xl p-5 shadow-sm space-y-4">
  <h3 className="font-bold text-lg">Filter Mobil</h3>
  <select className="w-full border p-3 rounded"><option>Semua Merk</option><option>Toyota</option><option>Honda</option></select>
  <select className="w-full border p-3 rounded"><option>Semua Tahun</option><option>2024</option><option>2023</option></select>
  <select className="w-full border p-3 rounded"><option>Semua Transmisi</option><option>Automatic</option><option>Manual</option></select>
 </aside>
}