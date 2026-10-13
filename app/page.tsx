import Link from "next/link";

const benefits = [
  { value: "Pencarian praktis", label: "Rancang pencarian sesuai kebutuhan" },
  { value: "Informasi jelas", label: "Detail kendaraan disiapkan dengan transparan" },
  { value: "Pengalaman nyaman", label: "Dirancang untuk desktop dan ponsel" },
];

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/" aria-label="MobilBekas.id beranda">
          MobilBekas<span>.id</span>
        </Link>
        <nav aria-label="Navigasi utama">
          <Link href="/" aria-current="page">Beranda</Link>
          <Link href="/cari-mobil">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Segera hadir</p>
          <h1 id="hero-title">Temukan mobil yang tepat untuk perjalanan berikutnya.</h1>
          <p className="hero-description">
            MobilBekas.id sedang menyiapkan pengalaman pencarian mobil bekas yang lebih praktis,
            jelas, dan nyaman digunakan dari perangkat apa pun.
          </p>
          <div className="search" role="group" aria-label="Jelajahi katalog">
            <p style={{ margin: "8px 12px", color: "#17212f" }}>Katalog kendaraan sedang disiapkan.</p>
            <Link className="primary-button" href="/cari-mobil">Lihat status katalog <span aria-hidden="true">→</span></Link>
          </div>
          <p className="search-hint">Kami akan menampilkan kendaraan setelah data listing siap diverifikasi.</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-car">🚘</div>
          <div className="visual-caption"><span className="visual-dot" /> MobilBekas.id — sedang dipersiapkan</div>
        </div>
      </section>

      <section className="benefits" aria-label="Fokus layanan">
        {benefits.map((benefit) => (
          <article className="benefit" key={benefit.value}>
            <span className="benefit-icon" aria-hidden="true">✓</span>
            <div><h2>{benefit.value}</h2><p>{benefit.label}</p></div>
          </article>
        ))}
      </section>

      <section className="content-panel" style={{ marginBottom: 42, padding: "clamp(24px, 4vw, 42px)" }} aria-labelledby="launch-title">
        <p className="eyebrow" style={{ color: "var(--red)" }}>Dalam pengembangan</p>
        <h2 id="launch-title" style={{ margin: "0 0 10px", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "clamp(24px, 3vw, 32px)" }}>Katalog mobil akan segera tersedia.</h2>
        <p className="page-intro" style={{ marginBottom: 20 }}>
          Saat ini belum ada listing kendaraan yang ditampilkan. Kami memilih untuk tidak menayangkan data contoh agar informasi harga dan ketersediaan tidak menyesatkan.
        </p>
        <Link className="primary-button" href="/jual">Jelajahi opsi jual mobil <span aria-hidden="true">→</span></Link>
      </section>

      <footer className="footer">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <p>Platform mobil bekas yang sedang kami siapkan untuk Anda.</p>
        <span>© {new Date().getFullYear()} MobilBekas.id</span>
      </footer>
    </main>
  );
}
