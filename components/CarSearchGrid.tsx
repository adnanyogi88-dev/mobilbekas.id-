import {cars} from '@/data/cars';

export default function CarSearchGrid(){
 return <section className="grid md:grid-cols-3 gap-6">
  {cars.map(car=>(
   <article key={car.id} className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-lg transition">
    <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center">Foto Mobil</div>
    <h3 className="font-bold text-lg mt-4">{car.name}</h3>
    <p className="text-red-600 font-bold mt-2">{car.price}</p>
    <div className="text-sm text-gray-500 mt-3 space-y-1">
     <p>{car.year} • {car.km}</p>
     <p>{car.transmission}</p>
     <p>{car.location}</p>
    </div>
   </article>
  ))}
 </section>
}
