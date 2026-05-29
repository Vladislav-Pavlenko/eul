import type { Metadata } from 'next';
import { Roboto_Slab, Playfair_Display } from 'next/font/google';
import './reset.css';
import './globals.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto-slab',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Дім Дороша — логістика та партнерство<',
  description: 'Elite Ukraine Logistics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${playfairDisplay.variable} ${robotoSlab.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
