import './globals.css';
import Navbar from './Navbar';

export const metadata = {
  title: 'Tech Vitals',
  description: 'Drug testing and volunteer data platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}</body>
    </html>
  );
}
