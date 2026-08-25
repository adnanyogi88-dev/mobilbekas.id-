import { Search, MapPin, ShieldCheck } from 'lucide-react';
import BrandSection from '@/components/BrandSection';
import PromoBanner from '@/components/PromoBanner';

const cars = [
 {name:'Toyota Avanza Veloz', year:'2022', price:'Rp185.000.000', km:'35.000 KM', city:'Jakarta'},
 {name:'Honda Brio Satya', year:'2023', price:'Rp165.000.000', km:'20.000 KM', city:'Bandung'},
 {name:'Mitsubishi Pajero Sport', year:'2021', price:'Rp390.000.000', km:'45.000 KM', city:'Surabaya'},
 {name:'Toyota Innova Reborn', year:'2020', price:'Rp275.000.000', km:'55.000 KM', city:'Medan'}
];

export default function Home(){
 return <main className="min-h-screen bg-slate-50">
  <header className="bg-white px-6 md:px-12 py-5 flex items-center justify-between shadow-sm">
   <h1 className="text-2xl font-black text-red-600">MobilBekas.id</h1>
   <nav className="hidden md:flex gap-8 text-sm font-medium">
    <span>Cari Mobil</span><span>Jual Mobil</span><span>Dealer</span><span>Login</span>
   </nav>
  </header>

  <section className="bg-red-600 px-6 py-16 text-center text-white">
   <h2 className="text-4xl md:text-5xl font-bold">Temukan Mobil Bekas Berkualitas</h2>
   <p className="mt-3 opacity-90">Ribuan mobil siap dibeli dari dealer terpercaya</p>
   <div className="mt-8 max-w-5xl mx-auto bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-3 text-slate-600 shadow-xl">
    <div className="flex-1 flex items-center gap-2 border rounded-lg p-3"><Search size={20}/>Cari merk atau model</div>
    <div className="flex-1 flex items-center gap-2 border rounded-lg p-3"><MapPin size={20}/>Lokasi</div>
    <button className="bg-red-600 text-white rounded-lg px-8 font-bold">Cari</button>
   </div>
  </section>

  <BrandSection />

  <section className="p-6 md:p-12">
   <div className="flex justify-between items-center mb-6"><h3 className="text-2xl font-bold">Mobil Pilihan</h3><span className="text-red-600">Lihat Semua</span></div>
   <div className="grid md:grid-cols-4 gap-5">
    {cars.map(car=><article key={car.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="h-44 bg-slate-200 flex items-center justify-center text-slate-500">Foto Mobil</div>
      <div className="p-5">
       <h4 className="font-bold">{car.name}</h4>
       <p className="text-sm text-slate-500 mt-2">{car.year} • {car.km}</p>
       <p className="text-red-600 font-bold mt-3">{car.price}</p>
       <p className="text-sm mt-2 flex gap-1"><MapPin size={15}/>{car.city}</p>
      </div>
    </article>)}
   </div>
  </section>

  <PromoBanner />

  <section className="p-6 md:p-12">
   <div className="bg-white rounded-2xl p-6 flex items-center gap-4"><ShieldCheck className="text-green-600"/><div><h3 className="font-bold">Aman dan Terpercaya</h3><p className="text-sm text-slate-500">Nikmati pengalaman mencari mobil dengan mudah.</p></div></div>
  </section>
 </main>
}