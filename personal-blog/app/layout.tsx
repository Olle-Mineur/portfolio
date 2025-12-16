import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olle Mineur",
  description:
    "Olle Mineur Portfolio Website. Computer Science and Engineering student at Linköping University. Projects and other things I find interesting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col max-w-full bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black dark:text-gray-100">
          <Nav />

          <main className="flex-1 w-4/5 lg:w-3/5 mx-auto min-h-0 py-4">
            {children}
          </main>

          <footer className="w-4/5 lg:w-3/5 mx-auto py-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}