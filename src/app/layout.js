import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Jalankarirku',
  description:
    'Sebuah platform untuk mengasah soft-skill dan mencari serta mengembangkan potensi diri agar bisa mendapatkan pekerjaan yang sesuai dengan minat dan bakat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
