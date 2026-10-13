import Link from "next/link";
import { cars } from "../../data/cars";
import { featuredCars } from "../../data/featured-cars";

type Params = Record<string, string | string[] | undefined>;
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

function one(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}
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
    tag: "Pilihan",
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

export default async function CariMobil({
  searchParams,
}: {
  searchParams?: Promise<Params> | Params;
}) {
  const params: Params = await (searchParams ?? {});
  const q = one(params.q).trim().toLocaleLowerCase("id");
  const brand = one(params.brand);
  const year = one(params.year);
  const location = one(params.location);
  const transmission = one(params.transmission);
  const budget = one(params.budget);
  const sort = one(params.sort);

  let results = listings.filter((car) => {
    const matchesQuery =
      !q || `${car.name} ${car.location} ${car.brand}`.toLocaleLowerCase("id").includes(q);
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

  if (sort === "price-asc") results = [...results].sort((a, b) => a.priceValue - b.priceValue);
  if (sort === "price-desc") results = [...results].sort((a, b) => b.priceValue - a.priceValue);
  if (sort === "year-desc") results = [...results].sort((a, b) => b.year - a.year);

  const brands = Array.from(new Set(listings.map((car) => car.brand))).sort();
  const years = Array.from(new Set(listings.map((car) => car.year))).sort((a, b) => b - a);
  const locations = Array.from(new Set(listings.map((car) => car.location))).sort();

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
          <form action="/cari-mobil" method="get" className="filters">
            <label className="field">Merek
              <select name="brand" defaultValue={brand}><option value="">Semua merek</option>{brands.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Tahun
              <select name="year" defaultValue={year}><option value="">Semua tahun</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Lokasi
              <select name="location" defaultValue={location}><option value="">Semua lokasi</option>{locations.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="field">Transmisi
              <select name="transmission" defaultValue={transmission}><option value="">Semua transmisi</option><option value="Automatic">Automatic</option><option value="Manual">Manual</option></select>
            </label>
            <label className="field">Kisaran harga
              <select name="budget" defaultValue={budget}>
                <option value="">Semua harga</option><option value="under-200">Di bawah Rp 200 juta</option>
                <option value="200-350">Rp 200–350 juta</option><option value="over-350">Di atas Rp 350 juta</option>
              </select>
            </label>
            <label className="field">Kata kunci
              <input name="q" type="search" defaultValue={one(params.q)} placeholder="Merek, model, atau kota" />
            </label>
            <label className="field">Urutkan
              <select name="sort" defaultValue={sort}><option value="">Rekomendasi</option><option value="price-asc">Harga terendah</option><option value="price-desc">Harga tertinggi</option><option value="year-desc">Tahun terbaru</option></select>
            </label>
            <button type="submit" className="primary-button">Terapkan filter</button>
            <Link href="/cari-mobil" className="text-link">Hapus semua filter</Link>
          </form>
        </aside>

        <section aria-label="Hasil pencarian">
          <div className="catalog-topline"><span><strong>{results.length}</strong> mobil ditemukan</span><span>Informasi dapat dikonfirmasi kepada penjual</span></div>
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
            <div className="empty-state"><h2>Tidak ada mobil yang cocok</h2><p>Coba ubah kata kunci atau kurangi filter pencarian.</p><Link className="text-link" href="/cari-mobil">Tampilkan semua mobil →</Link></div>
          )}
        </section>
      </div>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p></footer>
    </main>
  );
}
