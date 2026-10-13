import Link from "next/link";

export default function CariMobil() {
  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil" aria-current="page">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link>
        </nav>
      </header>
      <section className="form-page" style={{ maxWidth: 780 }}>
        <p className="eyebrow" style={{ color: "var(--red)" }}>Katalog kendaraan</p>
        <div className="form-card">
          <h1>Katalog sedang disiapkan</h1>
          <p>Belum ada kendaraan yang ditayangkan. Kami akan menambahkan listing setelah informasi kendaraan siap diperiksa.</p>
          <div className="detail-hero" aria-hidden="true" style={{ borderRadius: 14, minHeight: 190 }}>🚘</div>
          <div className="notice">Untuk saat ini, tidak ada harga, spesifikasi, atau ketersediaan kendaraan yang ditampilkan sebagai data aktif.</div>
          <Link className="primary-button" href="/">Kembali ke beranda <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Platform mobil bekas yang sedang kami siapkan untuk Anda.</p></footer>
    </main>
  );
}
