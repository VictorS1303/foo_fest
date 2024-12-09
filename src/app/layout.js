
import localFont from "next/font/local";
import "./globals.css";
import Navigation from '../app/components/Navigation.jsx'
import Footer from '../app/components/Footer.jsx'
import GuestPassPriceCalculator from '../app/components/GuestPassPriceCalculator.jsx'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FooFest",
  description: "Generated by create next app",
};

export default function RootLayout({ children })
{

    const navItems = [
      { linkText: 'Home', href: '/' },
      { linkText: 'Program', href: '/program' },
      { linkText: 'Book', href: '/book' },
    ];

  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main className="min-h-screen m-12">
          {children}

        </main>

        <Footer />
      </body>
    </html>
  );
}
