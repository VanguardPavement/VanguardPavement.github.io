import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderlust Family Properties | Vacation Condo Rentals in Indian Rocks & Indian Shores, FL",
  description: "Beautiful vacation condo rentals on the Gulf Coast in Indian Rocks Beach and Indian Shores, Florida. Steps from the beach, perfect for families.",
  keywords: "vacation rental, condo rental, Indian Rocks Beach, Indian Shores, Florida, Gulf Coast, beach vacation, family rental",
  openGraph: {
    title: "Wanderlust Family Properties | Beach Condo Rentals in Indian Rocks, FL",
    description: "Stunning Gulf Coast vacation condos in Indian Rocks Beach & Indian Shores, FL. Book your perfect beach getaway today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
