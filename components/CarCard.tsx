type Props={car:any}

export default function CarCard({car}:Props){
return <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
<div className="h-44 bg-gray-200 rounded-lg flex items-center justify-center">Mobil</div>
<h3 className="font-bold mt-4">{car.name}</h3>
<p>{car.year} • {car.transmission}</p>
<p>{car.km}</p>
<p className="text-red-600 font-bold">{car.price}</p>
<p className="text-sm text-gray-500">📍 {car.location}</p>
</div>
}