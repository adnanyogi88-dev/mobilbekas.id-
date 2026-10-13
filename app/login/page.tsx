import Link from "next/link";

export default function Login() {
  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link><Link href="/login" aria-current="page">Masuk</Link>
        </nav>
      </header>
      <section className="form-page">
        <div className="form-card">
          <p className="eyebrow" style={{ color: "var(--red)" }}>Akun pengguna</p>
          <h1>Masuk ke MobilBekas.id</h1>
          <p>Fitur autentikasi akun belum tersambung ke layanan backend.</p>
          <div className="notice">Demi keamanan, jangan masukkan kata sandi sampai sistem login resmi tersedia. Halaman ini belum dapat membuat akun atau memverifikasi pengguna.</div>
          <Link className="primary-button" href="/cari-mobil">Jelajahi mobil yang tersedia <span aria-hidden="true">→</span></Link>
          <p style={{ margin: 0 }}>Ingin menjual kendaraan? <Link className="text-link" href="/jual">Siapkan informasi mobil Anda.</Link></p>
        </div>
      </section>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p></footer>
    </main>
  );
}
