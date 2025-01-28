import type { Metadata } from "next";
import '@/styles/main.scss';

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
