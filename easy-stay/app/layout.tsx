import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
  title: "Easy-Stay",
  description: "Online Accomodation Booking System",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RentModal />
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-10 pt-28">{children}</div>
        <footer className="w-full bg-muted text-center text-xs text-neutral-500 py-4 mt-8 border-t">
          © {new Date().getFullYear()} EasyStay. Made with{" "}
          <span className="text-pink-500">♥</span> by Anurag Sharma.
        </footer>
      </body>
    </html>
  );
}
