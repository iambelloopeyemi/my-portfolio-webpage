import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-night flex flex-col`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
