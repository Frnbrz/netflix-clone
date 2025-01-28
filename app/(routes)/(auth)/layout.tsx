import type { Metadata } from "next";
import { Logo } from "@/components/Shared/Logo/Logo";

export const metadata: Metadata = {
  title: "Cloneflix",
  description: "A login and register page of Cloneflix",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="auth-layout">
      <div className="auth-layout__container">
        <div className="auth-layout__wrapper">
          <div className="auth-layout__sidebar" />
        </div>
        <header className="auth-layout__header">
          <Logo />
        </header>
        <section className="auth-layout__section">
          <div className="auth-layout__content">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
