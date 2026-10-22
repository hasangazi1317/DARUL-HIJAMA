import './globals.css';

export const metadata = {
  title: 'Darul-Hijama | Cupping Therapy Clinic',
  description: 'Fire cupping, dry cupping and wet cupping (Hijama). Call us to book your slot.',
};

export const viewport = { themeColor: '#06261c' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%2306261c'/%3E%3Ctext x='50' y='70' font-size='60' text-anchor='middle' fill='%23d4a84b' font-family='serif'%3ED%3C/text%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Figtree:wght@400;500;600&family=Marcellus&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
