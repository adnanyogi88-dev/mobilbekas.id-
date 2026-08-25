const vehicles = {
 'avanza-2022': {name:'Toyota Avanza Veloz 2022',price:'Rp 235 Juta',spec:'1.5 AT | 32.000 km | Automatic'},
 'civic-2021': {name:'Honda Civic Turbo 2021',price:'Rp 365 Juta',spec:'1.5 Turbo | 18.000 km | Automatic'},
 'pajero-2020': {name:'Mitsubishi Pajero Sport 2020',price:'Rp 410 Juta',spec:'2.4 Dakar | 45.000 km | Automatic'},
 'hrv-2023': {name:'Honda HR-V SE 2023',price:'Rp 385 Juta',spec:'1.5 CVT | 12.000 km | Automatic'}
};

export default async function Detail({params}:{params:{slug:string}}){
 const car=vehicles[params.slug as keyof typeof vehicles];
 if(!car) return <main className="page"><h1>Mobil tidak ditemukan</h1></main>;
 return <main className="page"><section className="cta"><div className="photo">🚘</div><h1>{car.name}</h1><h2>{car.price}</h2><p>{car.spec}</p><button>Hubungi Penjual</button></section></main>
}
