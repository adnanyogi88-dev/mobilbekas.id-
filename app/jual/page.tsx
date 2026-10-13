"use client";

import type { FormEvent } from "react";
import Link from "next/link";

export default function JualMobil() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();
    const message = [
      "Halo, saya ingin menanyakan cara memasang iklan mobil di MobilBekas.id.",
      "",
      `Merek dan model: ${value("model")}`,
      `Tahun: ${value("year")}`,
      `Harga yang diharapkan: Rp ${value("price")}`,
      `Kilometer: ${value("km") || "Belum diisi"}`,
      `Lokasi: ${value("location")}`,
      `Transmisi: ${value("transmission")}`,
      `Kontak WhatsApp penjual: ${value("contact")}`,
      `Catatan: ${value("notes") || "Tidak ada"}`,
    ].join("\n");
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil">Cari Mobil</Link>
          <Link href="/jual" aria-current="page">Jual Mobil</Link><Link href="/login">Masuk</Link>
        </nav>
      </header>
      <section className="form-page">
        <p className="eyebrow" style={{ color: "var(--red)" }}>Untuk pemilik kendaraan</p>
        <div className="form-card">
          <h1>Siapkan informasi mobil Anda</h1>
          <p>Lengkapi detail berikut untuk membuat ringkasan iklan yang bisa Anda kirim melalui WhatsApp.</p>
          <div className="notice">Catatan: halaman ini belum menerbitkan iklan secara otomatis. Formulir hanya menyiapkan pesan WhatsApp agar Anda dapat menghubungi kontak yang dipilih.</div>
          <form className="filters" onSubmit={handleSubmit}>
            <label className="field">Merek dan model mobil
              <input className="form-input" name="model" required maxLength={100} placeholder="Contoh: Toyota Avanza Veloz" />
            </label>
            <div className="form-grid">
              <label className="field">Tahun kendaraan
                <input className="form-input" name="year" type="number" min="1950" max="2027" required placeholder="2022" />
              </label>
              <label className="field">Harga yang diharapkan (Rp)
                <input className="form-input" name="price" type="number" min="1" required placeholder="185000000" />
              </label>
              <label className="field">Jarak tempuh (km)
                <input className="form-input" name="km" type="number" min="0" placeholder="35000" />
              </label>
              <label className="field">Transmisi
                <select name="transmission" defaultValue="Automatic"><option>Automatic</option><option>Manual</option></select>
              </label>
            </div>
            <label className="field">Lokasi kendaraan
              <input className="form-input" name="location" required maxLength={100} placeholder="Contoh: Jakarta Selatan" />
            </label>
            <label className="field">Nomor WhatsApp penjual
              <input className="form-input" name="contact" type="tel" required maxLength={25} placeholder="Contoh: 08xxxxxxxxxx" />
            </label>
            <label className="field">Catatan kondisi atau riwayat servis
              <textarea className="form-input" name="notes" maxLength={1000} rows={4} placeholder="Tambahkan informasi penting mengenai kendaraan." />
            </label>
            <button className="primary-button" type="submit">Buat pesan WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p></footer>
    </main>
  );
}
