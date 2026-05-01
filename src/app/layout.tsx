import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';
import './reset.css';
import './globals.css';

const liberationMono = localFont({
  src: './fonts/LiberationMono.woff2',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EGL',
  description: 'Elite Global Logistics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${liberationMono} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
