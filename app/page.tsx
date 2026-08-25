import { Car, Search } from 'lucide-react';

const cars = [
  {name:'Toyota Avanza Veloz', year:'2022', price:'Rp185.000.000', km:'35.000 KM'},
  {name:'Honda Brio Satya', year:'2023', price:'Rp165.000.000', km:'20.000 KM'},
  {name:'Mitsubishi Pajero Sport', year:'2021', price:'Rp390.000.000', km:'45.000 KM'}
];

export default function Home(){
 return <main className="min-h-screen bg-gray-50">
  <nav className="bg-white px-8 py-5 flex justify-between shadow-sm">
   <h1 className="text-2xl font-bold text-red-600">MobilBekas.id</h1>
   <div className="flex gap-6">Cari Mobil Jual Mobil Login</div>
  </nav>

  <section className="bg-red-600 text-white p-10 text-center">
   <h2 className="text-4xl font-bold mb-4">Temukan Mobil Impianmu</h2>
   <div className="bg-white rounded-xl p-4 max-w-4xl mx-auto flex gap-3 text-gray-600">
    <Search/> Cari merk, model, lokasi mobil...
   </div>
  </section>

  <section className="p-8">
   <h3 className="text-2xl font-bold mb-5">Mobil Pilihan</h3>
   <div className="grid md:grid-cols-3 gap-6">
   {cars.map((car)=><div className="bg-white rounded-xl shadow p-5" key={car.name}>
    <div className="h-40 bg-gray-200 rounded flex items-center justify-center"><Car size={60}/></div>
    <h4 className="font-bold mt-4">{car.name}</h4>
    <p>{car.year} • {car.km}</p>
    <p className="text-red-600 font-bold mt-2">{car.price}</p>
   </div>)}
   </div>
  </section>
 </main>
}