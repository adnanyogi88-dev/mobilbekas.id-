export default function BrandSection(){
 const brands=['Toyota','Honda','Daihatsu','Suzuki','Mitsubishi','BMW','Mercedes'];
 return <section className="px-8 py-10 bg-white">
  <h2 className="text-2xl font-bold mb-6">Cari Berdasarkan Merk</h2>
  <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
   {brands.map((brand)=><div key={brand} className="border rounded-xl p-4 text-center hover:shadow">{brand}</div>)}
  </div>
 </section>
}