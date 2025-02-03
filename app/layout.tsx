import type { Metadata } from "next";
import '@/styles/main.scss';

export const metadata: Metadata = {
  title: "Cloneflix",
  description: "A clone of popular movie page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      data-lt-installed="true">
      <body>
        {children}
      </body>
    </html>
  );
}
