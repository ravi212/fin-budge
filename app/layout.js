import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Fin-Budge",
  description: "One Stop Finance Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
          
        {/* footer */}
        <footer className="bg-blue-50 py-12">
        <div className="container mx-auto text-center px-4 text-gray-600">
          <p>Made by Ravi Raina</p>
        </div> 
        </footer>
      </body>
    </html>
  );
}
