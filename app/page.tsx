const cars = [
 {name:'Toyota Avanza Veloz 2022',price:'Rp 235 Juta',meta:'1.5 AT • 32.000 km',tag:'Terverifikasi'},
 {name:'Honda Civic Turbo 2021',price:'Rp 365 Juta',meta:'1.5 Turbo • 18.000 km',tag:'Premium'},
 {name:'Mitsubishi Pajero Sport 2020',price:'Rp 410 Juta',meta:'2.4 Dakar • 45.000 km',tag:'Favorit'}
];

export default function Home(){
 return <main className="page">
  <header className="nav"><b>MobilBekas<span>.id</span></b><nav>Beranda　 Cari Mobil　 Jual Mobil　 Artikel　 Login</nav></header>
  <section className="hero">
   <div><h1>Cari Mobil Bekas Impianmu</h1><p>Marketplace mobil bekas terpercaya dengan pilihan kendaraan berkualitas dan harga terbaik.</p>
   <div className="search">🔎 Cari merek, model, tahun, atau lokasi <button>Cari Mobil</button></div></div>
  </section>
  <section className="stats"><div>50.000+<small>Mobil tersedia</small></div><div>10.000+<small>Dealer terpercaya</small></div><div>100%<small>Inspeksi kendaraan</small></div></section>
  <section><h2>Mobil Pilihan Hari Ini</h2><div className="grid">{cars.map(c=><article key={c.name}><div className="photo">🚗</div><label>{c.tag}</label><h3>{c.name}</h3><p>{c.meta}</p><strong>{c.price}</strong><button className="detail">Lihat Detail</button></article>)}</div></section>
  <section className="cta"><h2>Punya mobil ingin dijual?</h2><p>Pasang iklan mudah dan temukan pembeli potensial.</p><button>Jual Mobil Sekarang</button></section>
 </main>
}
