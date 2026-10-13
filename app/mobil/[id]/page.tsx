import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "../../../data/cars";
import { featuredCars } from "../../../data/featured-cars";

type Props = { params: Promise<{ id: string }> };

function getVehicle(id: string) {
  const featured = featuredCars.find((car) => car.id === id);
  if (featured) {
    return {
      id: featured.id,
      name: featured.name,
      year: featured.year,
      price: featured.price,
      km: featured.km,
      location: featured.location,
      transmission: featured.transmission,
      engine: featured.engine,
      tag: featured.tag,
    };
  }

  const existing = cars.find((car) => String(car.id) === id);
  if (!existing) return null;
  return {
    id: String(existing.id),
    name: existing.name,
    year: existing.year,
    price: existing.price,
    km: Number(existing.km.replace(/[^\d]/g, "")) || 0,
    location: existing.location,
    transmission: existing.transmission,
    engine: "Informasi mesin tersedia dari penjual",
    tag: "Pilihan",
  };
}

export async function generateStaticParams() {
  return [
    ...cars.map((car) => ({ id: String(car.id) })),
    ...featuredCars.map((car) => ({ id: car.id })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const car = getVehicle(id);
  if (!car) return { title: "Mobil tidak ditemukan" };
  return {
    title: `${car.name} — ${car.price}`,
    description: `Lihat informasi ${car.name}, tahun ${car.year}, jarak tempuh ${car.km.toLocaleString("id-ID")} km, transmisi ${car.transmission}, dan lokasi ${car.location}. Hubungi penjual untuk detail.`,
    openGraph: {
      title: `${car.name} — ${car.price}`,
      description: `Spesifikasi dan informasi kendaraan ${car.name} di MobilBekas.id.`,
      type: "website",
    },
  };
}

export default async function DetailMobil({ params }: Props) {
  const { id } = await params;
  const car = getVehicle(id);
  if (!car) notFound();

  const message = `Halo, saya tertarik dengan ${car.name} (${car.year}) dengan harga ${car.price}. Apakah mobil ini masih tersedia?`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <main className="page">
      <header className="nav">
        <Link className="brand" href="/">MobilBekas<span>.id</span></Link>
        <nav aria-label="Navigasi utama">
          <Link href="/">Beranda</Link><Link href="/cari-mobil">Cari Mobil</Link>
          <Link href="/jual">Jual Mobil</Link><Link href="/login">Masuk</Link>
        </nav>
      </header>
      <div className="detail-layout">
        <p><Link className="text-link" href="/cari-mobil">← Kembali ke pencarian</Link></p>
        <article className="detail-panel">
          <div className="detail-hero" aria-label="Ilustrasi kendaraan" role="img">🚘</div>
          <div className="detail-body">
            <span className="car-tag">{car.tag}</span>
            <h1>{car.name}</h1>
            <p className="detail-price">{car.price}</p>
            <p className="page-intro">Pastikan detail kendaraan, dokumen, kondisi, dan riwayat servis dengan penjual sebelum bertransaksi.</p>
            <div className="spec-grid">
              <div className="spec"><span>Tahun</span><strong>{car.year}</strong></div>
              <div className="spec"><span>Jarak tempuh</span><strong>{car.km.toLocaleString("id-ID")} km</strong></div>
              <div className="spec"><span>Transmisi</span><strong>{car.transmission}</strong></div>
              <div className="spec"><span>Lokasi</span><strong>{car.location}</strong></div>
            </div>
            <p><strong>Informasi mesin:</strong> {car.engine}</p>
            <div className="notice">Harga dan ketersediaan dapat berubah. Konfirmasikan dokumen dan kondisi mobil secara langsung.</div>
            <p style={{ marginTop: 22 }}>
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Tanyakan lewat WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
        </article>
      </div>
      <footer className="footer"><Link className="brand" href="/">MobilBekas<span>.id</span></Link><p>Temukan mobil pilihan Anda dengan informasi yang jelas.</p></footer>
    </main>
  );
}
