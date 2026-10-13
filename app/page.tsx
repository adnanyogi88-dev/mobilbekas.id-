import Link from "next/link";
import { featuredCars } from "../data/featured-cars";

const benefits = [
  { value: "Pilihan variatif", label: "Beragam model dan kebutuhan" },
  { value: "Info transparan", label: "Harga dan spesifikasi mudah dibaca" },
  { value: "Kontak mudah", label: "Hubungi penjual untuk detail" },
];

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/" aria-label="MobilBekas.id beranda">
          MobilBekas<span>.id</span>
        </Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link>
          <Link href="/cari-mobil">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link>
          <Link href="/login">Masuk</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Temukan kendaraan berikutnya</p>
          <h1 id="hero-title">Cari mobil bekas yang cocok untuk perjalanan Anda.</h1>
          <p className="hero-description">
            Jelajahi pilihan mobil berdasarkan model, anggaran, tahun, dan lokasi.
            Bandingkan informasi sebelum menghubungi penjual.
          </p>
          <form className="search" action="/cari-mobil" method="get" role="search">
            <label className="sr-only" htmlFor="q">Cari merek atau model mobil</label>
            <input id="q" name="q" type="search" placeholder="Contoh: Toyota Avanza, Honda Brio…" />
            <button type="submit">Cari Mobil <span aria-hidden="true">→</span></button>
          </form>
          <p className="search-hint">Mulai dengan merek atau model yang Anda inginkan.</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-car">🚘</div>
          <div className="visual-caption"><span className="visual-dot" /> Pilihan untuk kebutuhan harian dan keluarga</div>
        </div>
      </section>

      <section className="benefits" aria-label="Keunggulan pencarian">
        {benefits.map((benefit) => (
          <article className="benefit" key={benefit.value}>
            <span className="benefit-icon" aria-hidden="true">✓</span>
            <div><h2>{benefit.value}</h2><p>{benefit.label}</p></div>
          </article>
        ))}
      </section>

      <section className="listing-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Kurasi pilihan</p>
            <h2 id="featured-title">Rekomendasi mobil bekas</h2>
            <p>Jelajahi beberapa pilihan untuk memulai pencarian Anda.</p>
            <p className="catalog-note">Data kendaraan saat ini merupakan contoh pengembangan. Konfirmasikan harga dan ketersediaan sebelum bertransaksi.</p>
          </div>
          <Link className="text-link" href="/cari-mobil">Lihat semua mobil <span aria-hidden="true">→</span></Link>
        </div>
        <div className="car-grid">
          {featuredCars.map((car, index) => (
            <article className="car-card" key={car.id}>
              <Link className="car-image-link" href={`/mobil/${car.id}`} aria-label={`Lihat detail ${car.name}`}>
                <div className={`car-image car-image-${index + 1}`} aria-hidden="true"><span>🚘</span></div>
              </Link>
              <div className="car-card-body">
                <span className="car-tag">{car.tag}</span>
                <h3><Link href={`/mobil/${car.id}`}>{car.name}</Link></h3>
                <p className="car-meta">{car.meta}</p>
                <p className="car-price">{car.price}</p>
                <Link className="detail-link" href={`/mobil/${car.id}`}>Lihat detail <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sell-cta">
        <div>
          <p className="eyebrow">Punya mobil untuk dijual?</p>
          <h2>Temukan calon pembeli yang tepat.</h2>
          <p>Siapkan informasi kendaraan Anda dan mulai dari halaman jual mobil.</p>
        </div>
        <Link className="button button-light" href="/jual">Mulai jual mobil <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="footer">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p>
        <span>© {new Date().getFullYear()} MobilBekas.id</span>
      </footer>
    </main>
  );
}
