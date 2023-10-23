import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/organism/navbar";
import Footer from "./components/organism/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-header">
          <Navbar />
        </div>
        <main className="main">{children}</main>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
