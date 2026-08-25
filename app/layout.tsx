import './globals.css'

export const metadata = {
  title: 'MobilBekas.id - Marketplace Mobil Bekas',
  description: 'Cari mobil bekas berkualitas dengan mudah'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}