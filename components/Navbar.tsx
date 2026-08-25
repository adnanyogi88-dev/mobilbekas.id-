export default function Navbar(){
 return <header className="bg-white border-b px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 z-10">
  <div className="text-2xl font-bold text-red-600">MobilBekas.id</div>
  <nav className="hidden md:flex gap-6 text-sm font-medium">
   <span>Cari Mobil</span>
   <span>Jual Mobil</span>
   <span>Dealer</span>
   <span>Masuk</span>
  </nav>
 </header>
}