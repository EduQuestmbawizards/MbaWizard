import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import WhatsAppFloatButton from "@/components/shared/whatsapp-float-button/WhatsAppFloatButton";
import BookDemoPopup from "@/components/shared/book-demo-popup/BookDemoPopup";
import JsonLd from "@/components/shared/json-ld/JsonLd";
import { organizationSchema } from "@/data/organization-schema";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05164d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mbawizards.co.in"),
  title: {
    default: "Personalized GMAT, GRE & CAT Coaching for Top MBA Admissions | MBA Wizards",
    template: "%s | MBA Wizards",
  },
  description:
    "Achieve your MBA dream with MBA Wizards. Expert coaching for GMAT, GRE, CAT, and admissions counseling. Personalized study plans, AI-based analytics, and proven success.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "MBA Wizards",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/common/mba-wizards-og-banner.png",
        width: 1200,
        height: 630,
        alt: "MBA Wizards — Elite GMAT, CAT, GRE Coaching & Global MBA Admissions Mentorship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mbawizards",
    creator: "@mbawizards",
    images: ["/images/common/mba-wizards-og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <BookDemoPopup />
      </body>
    </html>
  );
}
