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
    <html lang="es"
      data-lt-installed="true">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
