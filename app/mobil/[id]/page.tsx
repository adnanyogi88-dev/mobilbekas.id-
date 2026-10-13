import Link from "next/link";

export default function DetailMobil() {
  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil">Cari Mobil</Link><Link href="/jual">Jual Mobil</Link>
        </nav>
      </header>
      <section className="form-page">
        <div className="form-card">
          <p className="eyebrow" style={{ color: "var(--red)" }}>Detail kendaraan</p>
          <h1>Listing belum tersedia</h1>
          <p>Halaman detail akan tersedia setelah katalog kendaraan resmi dipublikasikan.</p>
          <Link className="primary-button" href="/cari-mobil">Kembali ke katalog <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Platform mobil bekas yang sedang kami siapkan untuk Anda.</p></footer>
    </main>
  );
}
