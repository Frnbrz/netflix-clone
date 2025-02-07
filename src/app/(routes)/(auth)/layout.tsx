import type { Metadata } from "next";
import { Logo } from "@/src/components/Shared/Logo/Logo";
import Footer from "@/src/components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Auth",
  description: "A login and register page of Cloneflix",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ToastContainer />
      <div className="auth">
        <div className="auth__background" />
        <header className="auth__header">
          <Logo />
        </header>
        <main className="main">
          <div className="main__content">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </ >
  );
}
