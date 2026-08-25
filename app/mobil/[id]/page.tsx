import {cars} from '@/data/cars';

export default function Detail({params}:{params:{id:string}}){
 const car=cars.find(c=>c.id===params.id)||cars[0];
 return <main className="p-8 bg-gray-50 min-h-screen">
  <div className="bg-white rounded-xl p-8 shadow">
   <div className="h-72 bg-gray-200 rounded-xl flex items-center justify-center">Foto Mobil</div>
   <h1 className="text-3xl font-bold mt-6">{car.name}</h1>
   <p className="text-red-600 text-2xl font-bold mt-3">{car.price}</p>
   <div className="grid md:grid-cols-3 gap-4 mt-6">
    <div>Tahun {car.year}</div><div>{car.km}</div><div>{car.transmission}</div>
   </div>
   <button className="bg-green-600 text-white px-6 py-3 rounded mt-8">Chat WhatsApp</button>
  </div>
 </main>
}