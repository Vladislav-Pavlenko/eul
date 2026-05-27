import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './reset.css';
import './globals.css';

const robotoSlab = Roboto_Slab({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto-slab',
});

export const metadata: Metadata = {
  title: 'EUL',
  description: 'Elite Ukraine Logistics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${robotoSlab.variable}`}>
      <body>{children}</body>
    </html>
  );
}
