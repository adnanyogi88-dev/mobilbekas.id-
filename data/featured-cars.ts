export type FeaturedCar = {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: string;
  priceValue: number;
  km: number;
  location: string;
  transmission: "Automatic" | "Manual";
  engine: string;
  meta: string;
  tag: string;
};

export const featuredCars: FeaturedCar[] = [
  {
    id: "avanza-2022",
    name: "Toyota Avanza Veloz 2022",
    brand: "Toyota",
    year: 2022,
    price: "Rp 235.000.000",
    priceValue: 235000000,
    km: 32000,
    location: "Jakarta",
    transmission: "Automatic",
    engine: "1.5 L",
    meta: "1.5 AT • 32.000 km • Jakarta",
    tag: "Pilihan",
  },
  {
    id: "civic-2021",
    name: "Honda Civic Turbo 2021",
    brand: "Honda",
    year: 2021,
    price: "Rp 365.000.000",
    priceValue: 365000000,
    km: 18000,
    location: "Bandung",
    transmission: "Automatic",
    engine: "1.5 Turbo",
    meta: "1.5 Turbo • 18.000 km • Bandung",
    tag: "Premium",
  },
  {
    id: "pajero-2020",
    name: "Mitsubishi Pajero Sport 2020",
    brand: "Mitsubishi",
    year: 2020,
    price: "Rp 410.000.000",
    priceValue: 410000000,
    km: 45000,
    location: "Surabaya",
    transmission: "Automatic",
    engine: "2.4 Dakar",
    meta: "2.4 Dakar • 45.000 km • Surabaya",
    tag: "Favorit",
  },
  {
    id: "hrv-2023",
    name: "Honda HR-V SE 2023",
    brand: "Honda",
    year: 2023,
    price: "Rp 385.000.000",
    priceValue: 385000000,
    km: 12000,
    location: "Jakarta",
    transmission: "Automatic",
    engine: "1.5 L CVT",
    meta: "1.5 CVT • 12.000 km • Jakarta",
    tag: "Pilihan",
  },
];
