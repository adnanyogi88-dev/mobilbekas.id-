import {cars} from '@/data/cars';

export default function Detail({params}:{params:{id:string}}){
 const car=cars.find(c=>String(c.id)===params.id)||cars[0];
 return <main className="bg-gray-50 min-h-screen p-8">
  <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow">
   <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🚗</div>
   <h1 className="text-3xl font-bold mt-6">{car.name}</h1>
   <p className="text-red-600 text-2xl font-bold mt-3">{car.price}</p>
   <div className="grid md:grid-cols-3 gap-5 mt-6">
    <div>Tahun<br/><b>{car.year}</b></div>
    <div>Lokasi<br/><b>{car.location}</b></div>
    <div>Transmisi<br/><b>{car.transmission}</b></div>
   </div>
   <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl">Chat WhatsApp</button>
  </div>
 </main>
}