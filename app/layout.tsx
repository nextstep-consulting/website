import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Next Step Consulting Group | UAE Visa, Business Setup & HR Solutions in Dubai",
    template: "%s | Next Step Consulting Group",
  },
  description:
    "Next Step Consulting Group offers expert UAE consulting services: Visit Visa processing, Business Setup (Mainland, Freezone, Offshore), Real Estate consultancy, and comprehensive HR solutions. Fast, reliable, and professional services in Dubai and across UAE. Call +971 507375742.",
  keywords: [
    "UAE visit visa",
    "Dubai visit visa",
    "tourist visa UAE",
    "family visit visa Dubai",
    "business visit visa UAE",
    "UAE business setup",
    "company formation UAE",
    "mainland company Dubai",
    "freezone business setup",
    "offshore company UAE",
    "UAE real estate",
    "property investment Dubai",
    "HR services UAE",
    "recruitment Dubai",
    "payroll management UAE",
    "employee visa processing",
    "visa consulting UAE",
    "immigration services Dubai",
    "business consultancy UAE",
    "Next Step Consulting Group",
    "Next Step Consultings",
    "freelance visa UAE",
    "work permit Dubai",
    "consulting group Dubai",
    "nextstepconsultings",
    "business consulting Dubai",
    "visa services Dubai",
    "2 year working permit UAE",
  ],
  authors: [{ name: "Next Step Consulting Group" }],
  creator: "Next Step Consulting Group",
  publisher: "Next Step Consulting Group",
  metadataBase: new URL("https://nextstepconsultings.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextstepconsultings.com",
    siteName: "Next Step Consulting Group",
    title:
      "Next Step Consulting Group | UAE Visa, Business Setup & HR Solutions in Dubai",
    description:
      "Your trusted partner for UAE Visit Visa, Business Setup, Real Estate, and HR services in Dubai. Fast processing, expert guidance. Call +971 507375742.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Next Step Consulting Group - UAE Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Step Consulting Group | UAE Business & Visa Solutions in Dubai",
    description:
      "Expert UAE Visit Visa, Business Setup, Real Estate & HR services in Dubai. Your success is our priority. Call +971 507375742.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A2463" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://nextstepconsultings.com" />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Next Step Consulting Group",
              url: "https://nextstepconsultings.com",
              description:
                "Expert consulting services in UAE: Visit Visa processing, Business Setup, Real Estate consultancy, and HR solutions.",
              publisher: {
                "@type": "Organization",
                name: "Next Step Consulting Group",
                logo: {
                  "@type": "ImageObject",
                  url: "https://nextstepconsultings.com/logo.png",
                },
              },
            }),
          }}
        />

        {/* ProfessionalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Next Step Consulting Group",
              description:
                "Expert UAE consulting services: Visit Visa, Business Setup, Real Estate, and HR solutions",
              url: "https://nextstepconsultings.com",
              logo: "https://nextstepconsultings.com/logo.png",
              image: "https://nextstepconsultings.com/logo.png",
              telephone: "+971 507375742",
              email: "nextstep247123@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.2048",
                longitude: "55.2708",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "United Arab Emirates",
                },
                {
                  "@type": "City",
                  name: "Dubai",
                },
                {
                  "@type": "City",
                  name: "Abu Dhabi",
                },
              ],
              sameAs: [
                "https://www.facebook.com/nextstepconsultinggroup",
                "https://www.instagram.com/next_step247",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Consulting Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Visit Visa Services",
                      description:
                        "Tourist, family, and business visit visa processing for UAE",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Business Setup in UAE",
                      description:
                        "Mainland, freezone, and offshore company formation services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Real Estate Consultancy",
                      description:
                        "Residential and commercial property investment services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Human Resource Solutions",
                      description:
                        "Recruitment, payroll, and employee visa processing services",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              founder: {
                "@type": "Person",
                name: "Ronish Shrestha",
                jobTitle: "Chairman & Founder",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
