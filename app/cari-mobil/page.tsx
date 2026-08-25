import { cars } from '../../data/cars';

const filters = ['Merk', 'Harga', 'Tahun', 'Lokasi', 'Transmisi'];

export default function CariMobil() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cari Mobil Bekas</h1>
        <p className="text-gray-500 mb-8">Temukan mobil sesuai kebutuhan dan budget Anda.</p>

        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="bg-white rounded-2xl p-5 shadow-sm h-fit">
            <h2 className="font-bold text-lg mb-4">Filter Mobil</h2>
            {filters.map((filter) => (
              <div key={filter} className="mb-4">
                <label className="text-sm font-medium">{filter}</label>
                <div className="mt-2 border rounded-lg p-3 text-gray-400">Pilih {filter}</div>
              </div>
            ))}
          </aside>

          <section className="lg:col-span-3">
            <div className="flex justify-between mb-5">
              <span className="font-semibold">Mobil tersedia</span>
              <button className="border rounded-lg px-4 py-2 bg-white">Urutkan</button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {cars.map((car) => (
                <article key={car.id} className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="h-44 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                    Foto Mobil
                  </div>
                  <h3 className="font-bold text-xl">{car.name}</h3>
                  <p className="text-gray-500">{car.year} • {car.km}</p>
                  <p className="text-red-600 font-bold text-lg mt-3">{car.price}</p>
                  <p className="text-sm">{car.location}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}