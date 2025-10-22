import type { Metadata } from "next";
import "./globals.css";

// Мета-информация для SEO
export const metadata: Metadata = {
  title: "Movie Search App",
  description: "Search for your favorite movies using TMDB API",
};

// Корневой layout компонент для всего приложения
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
