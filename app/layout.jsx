import { Geist, Geist_Mono, Imprima } from "next/font/google";
import Footer from "./components/Footer/index.jsx";
import Header from "@/app/components/Header/Header.jsx";
import "@/app/styles/global.scss"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premosul",
  description: "Premosul ",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
