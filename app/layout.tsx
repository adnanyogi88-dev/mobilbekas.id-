import './globals.css'

export const metadata = {
 title:'MobilBekas.id | Jual Beli Mobil Bekas Terpercaya',
 description:'Marketplace mobil bekas modern dengan pencarian cepat, dealer terpercaya, dan informasi kendaraan lengkap.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="id"><body>{children}</body></html>
}
