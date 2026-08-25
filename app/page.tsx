const cars = [
 {id:'avanza-2022',name:'Toyota Avanza Veloz 2022',price:'Rp 235 Juta',meta:'1.5 AT • 32.000 km • Jakarta',tag:'Terverifikasi'},
 {id:'civic-2021',name:'Honda Civic Turbo 2021',price:'Rp 365 Juta',meta:'1.5 Turbo • 18.000 km • Bandung',tag:'Premium'},
 {id:'pajero-2020',name:'Mitsubishi Pajero Sport 2020',price:'Rp 410 Juta',meta:'2.4 Dakar • 45.000 km • Surabaya',tag:'Favorit'},
 {id:'hrv-2023',name:'Honda HR-V SE 2023',price:'Rp 385 Juta',meta:'1.5 CVT • 12.000 km • Jakarta',tag:'Baru'}
];

export default function Home(){
 return <main className="page">
  <header className="nav"><b>MobilBekas<span>.id</span></b><nav>Beranda　 Cari Mobil　 Jual Mobil　 Dealer　 Artikel　 Login</nav></header>

  <section className="hero">
   <div>
    <h1>Temukan Mobil Bekas Berkualitas</h1>
    <p>Platform jual beli mobil bekas dengan pencarian cepat, informasi transparan, dan pilihan kendaraan terpercaya.</p>
    <div className="search">🔎 Cari Toyota, Honda, SUV, MPV, tahun, lokasi <button>Cari Mobil</button></div>
   </div>
  </section>

  <section className="stats">
   <div>50.000+<small>Mobil tersedia</small></div>
   <div>10.000+<small>Dealer aktif</small></div>
   <div>100%<small>Data kendaraan</small></div>
   <div>24/7<small>Layanan online</small></div>
  </section>

  <section><h2>Rekomendasi Mobil Bekas</h2><div className="grid">{cars.map(c=><article key={c.id}><div className="photo">🚘</div><label>{c.tag}</label><h3>{c.name}</h3><p>{c.meta}</p><strong>{c.price}</strong><a className="detail" href={`/mobil/${c.id}`}>Lihat Detail</a></article>)}</div></section>

  <section className="cta"><h2>Ingin Menjual Mobil?</h2><p>Buat iklan kendaraan dan jangkau calon pembeli lebih cepat.</p><button>Pasang Iklan Gratis</button></section>
 </main>
}
