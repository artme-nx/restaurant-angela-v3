import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Caveat, Courier_Prime } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Angela — Restoran & Grill | Sveti Filip i Jakov",
  description:
    "Restoran Angela u Svetom Filipu i Jakovu, uz Biograd na moru — svježa riba, škampi i lignje s gradela, mesne i riblje plate na pješačkoj uličici uz more. Rezervirajte stol na +385 23 389 254.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${cormorant.variable} ${lora.variable} ${caveat.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Restoran Angela",
              description:
                "Restoran i grill u Svetom Filipu i Jakovu, na pješačkoj uličici korak od mora. Svježa riba, škampi i lignje s gradela, mesne i riblje plate.",
              servesCuisine: ["Dalmatinska", "Riba i plodovi mora", "Roštilj", "Mediteranska"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ul. kralja Petra Krešimira IV 130",
                addressLocality: "Sveti Filip i Jakov",
                postalCode: "23207",
                addressRegion: "Zadarska županija",
                addressCountry: "HR",
              },
              telephone: "+38523389254",
              url: "https://artme-nx.github.io/restaurant-angela-v3/",
              priceRange: "€€",
              acceptsReservations: "True",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                bestRating: "5",
                ratingCount: "278",
              },
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
