"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cars } from "../../data/cars";
import { featuredCars } from "../../data/featured-cars";

type Listing = {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: string;
  priceValue: number;
  km: number;
  location: string;
  transmission: string;
  tag: string;
};

function numberFromPrice(value: string): number {
  return Number(value.replace(/[^\d]/g, "")) || 0;
}

const listings: Listing[] = [
  ...cars.map((car) => ({
    id: String(car.id),
    name: car.name,
    brand: car.name.split(" ")[0],
    year: car.year,
    price: car.price,
    priceValue: numberFromPrice(car.price),
    km: Number(car.km.replace(/[^\d]/g, "")) || 0,
    location: car.location,
    transmission: car.transmission,
    tag: "Contoh",
  })),
  ...featuredCars.map((car) => ({
    id: car.id,
    name: car.name,
    brand: car.brand,
    year: car.year,
    price: car.price,
    priceValue: car.priceValue,
    km: car.km,
    location: car.location,
    transmission: car.transmission,
    tag: car.tag,
  })),
];

export default function CariMobil() {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [transmission, setTransmission] = useState("");
  const [budget, setBudget] = useState("");
  const [sort, setSort] = useState("");

  const brands = Array.from(new Set(listings.map((car) => car.brand))).sort();
  const years = Array.from(new Set(listings.map((car) => car.year))).sort((a, b) => b - a);
  const locations = Array.from(new Set(listings.map((car) => car.location))).sort();

  const results = useMemo(() => {
    const query = q.trim().toLocaleLowerCase("id");
    let filtered = listings.filter((car) => {
      const matchesQuery = !query || `${car.name} ${car.location} ${car.brand}`.toLocaleLowerCase("id").includes(query);
      const matchesBrand = !brand || car.brand === brand;
      const matchesYear = !year || String(car.year) === year;
      const matchesLocation = !location || car.location === location;
      const matchesTransmission = !transmission || car.transmission === transmission;
      const matchesBudget =
        !budget ||
        (budget === "under-200" && car.priceValue < 200000000) ||
        (budget === "200-350" && car.priceValue >= 200000000 && car.priceValue <= 350000000) ||
        (budget === "over-350" && car.priceValue > 350000000);
      return matchesQuery && matchesBrand && matchesYear && matchesLocation && matchesTransmission && matchesBudget;
    });

    if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.priceValue - a.priceValue);
    if (sort === "year-desc") filtered = [...filtered].sort((a, b) => b.year - a.year);
    return filtered;
  }, [q, brand, year, location, transmission, budget, sort]);

  function resetFilters() {
    setQ("");
    setBrand("");
    setYear("");
    setLocation("");
    setTransmission("");
    setBudget("");
    setSort("");
  }

  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil" aria-current="page">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link><Link href="/login">Masuk</Link>
        </nav>
      </header>
      <p className="eyebrow" style={{ color: "var(--red)" }}>Katalog kendaraan</p>
      <h1 className="page-title">Cari mobil bekas</h1>
      <p className="page-intro">Gunakan filter untuk menyaring pilihan berdasarkan kebutuhan dan anggaran Anda.</p>

      <div className="catalog-layout">
        <aside className="content-panel">
          <h2 style={{ margin: "0 0 16px", fontSize: 17 }}>Filter pencarian</h2>
          <div className="filters">
            <label className="field">Merek
              <select value={brand} onChange={(event) => setBrand(event.target.value)}><option value="">Semua merek</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Tahun
              <select value={year} onChange={(event) => setYear(event.target.value)}><option value="">Semua tahun</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Lokasi
              <select value={location} onChange={(event) => setLocation(event.target.value)}><option value="">Semua lokasi</option>{locations.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Transmisi
              <select value={transmission} onChange={(event) => setTransmission(event.target.value)}><option value="">Semua transmisi</option><option value="Automatic">Automatic</option><option value="Manual">Manual</option></select>
            </label>
            <label className="field">Kisaran harga
              <select value={budget} onChange={(event) => setBudget(event.target.value)}>
                <option value="">Semua harga</option><option value="under-200">Di bawah Rp 200 juta</option>
                <option value="200-350">Rp 200–350 juta</option><option value="over-350">Di atas Rp 350 juta</option>
              </select>
            </label>
            <label className="field">Kata kunci
              <input type="search" value={q} onChange={(event) => setQ(event.target.value)} placeholder="Merek, model, atau kota" />
            </label>
            <label className="field">Urutkan
              <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="">Rekomendasi</option><option value="price-asc">Harga terendah</option><option value="price-desc">Harga tertinggi</option><option value="year-desc">Tahun terbaru</option></select>
            </label>
            <button type="button" className="primary-button" onClick={resetFilters}>Hapus semua filter</button>
          </div>
        </aside>

        <section aria-label="Hasil pencarian">
          <div className="catalog-topline"><span><strong>{results.length}</strong> mobil ditemukan</span><span>Data contoh; konfirmasikan detail sebelum transaksi</span></div>
          {results.length ? (
            <div className="catalog-grid">
              {results.map((car, index) => (
                <article className="catalog-card" key={car.id}>
                  <Link href={`/mobil/${car.id}`} className="car-image-link" aria-label={`Detail ${car.name}`}>
                    <div className={`car-image car-image-${(index % 4) + 1}`} aria-hidden="true"><span>🚘</span></div>
                  </Link>
                  <div className="catalog-card-body">
                    <span className="car-tag">{car.tag}</span>
                    <h2><Link href={`/mobil/${car.id}`}>{car.name}</Link></h2>
                    <p>{car.year} • {car.km.toLocaleString("id-ID")} km • {car.transmission}</p>
                    <p>{car.location}</p>
                    <strong className="car-price">{car.price}</strong>
                    <Link className="detail-link" href={`/mobil/${car.id}`}>Lihat detail <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state"><h2>Tidak ada mobil yang cocok</h2><p>Coba ubah kata kunci atau kurangi filter pencarian.</p><button className="text-link" type="button" onClick={resetFilters}>Tampilkan semua mobil →</button></div>
          )}
        </section>
      </div>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p></footer>
    </main>
  );
}
