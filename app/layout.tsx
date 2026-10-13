import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MobilBekas.id | Cari Mobil Bekas",
    template: "%s | MobilBekas.id",
  },
  description:
    "Jelajahi pilihan mobil bekas berdasarkan merek, tahun, anggaran, dan lokasi. Periksa spesifikasi kendaraan dan hubungi penjual untuk informasi lebih lanjut.",
  applicationName: "MobilBekas.id",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "MobilBekas.id",
    title: "MobilBekas.id | Cari Mobil Bekas",
    description:
      "Jelajahi pilihan mobil bekas dan temukan kendaraan yang sesuai kebutuhan Anda.",
  },
  twitter: {
    card: "summary",
    title: "MobilBekas.id | Cari Mobil Bekas",
    description:
      "Jelajahi pilihan mobil bekas berdasarkan merek, tahun, anggaran, dan lokasi.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
