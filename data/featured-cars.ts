export type FeaturedCar = {
  id: string;
  name: string;
  price: string;
  meta: string;
  tag: string;
};

export const featuredCars: FeaturedCar[] = [
  { id: 'avanza-2022', name: 'Toyota Avanza Veloz 2022', price: 'Rp 235 Juta', meta: '1.5 AT • 32.000 km • Jakarta', tag: 'Terverifikasi' },
  { id: 'civic-2021', name: 'Honda Civic Turbo 2021', price: 'Rp 365 Juta', meta: '1.5 Turbo • 18.000 km • Bandung', tag: 'Premium' },
  { id: 'pajero-2020', name: 'Mitsubishi Pajero Sport 2020', price: 'Rp 410 Juta', meta: '2.4 Dakar • 45.000 km • Surabaya', tag: 'Favorit' },
  { id: 'hrv-2023', name: 'Honda HR-V SE 2023', price: 'Rp 385 Juta', meta: '1.5 CVT • 12.000 km • Jakarta', tag: 'Baru' }
];
