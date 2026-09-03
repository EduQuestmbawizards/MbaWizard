import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import WhatsAppFloatButton from "@/components/shared/whatsapp-float-button/WhatsAppFloatButton";
import BookDemoPopup from "@/components/shared/book-demo-popup/BookDemoPopup";
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatButton />
        <BookDemoPopup />
      </body>
    </html>
  );
}
