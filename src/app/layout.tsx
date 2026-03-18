import type { Metadata, Viewport } from "next"
import { Lora, Nunito } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const viewport: Viewport = {
  themeColor: "#1C7A8A",
}

export const metadata: Metadata = {
  title: {
    default: "Beyond Care Home Care Services | Nurse-Led Home Care in South Carolina",
    template: "%s | Beyond Care Home Care Services",
  },
  description:
    "Beyond Care Home Care Services provides compassionate, nurse-led non-medical home care in South Carolina. Personal care, companionship, respite, and more — available 24/7.",
  metadataBase: new URL("https://beyondcarehc.com"),
  openGraph: {
    type: "website",
    siteName: "Beyond Care Home Care Services",
    locale: "en_US",
    url: "https://beyondcarehc.com",
    title: "Beyond Care Home Care Services | Nurse-Led Home Care in South Carolina",
    description:
      "Compassionate, nurse-led non-medical home care serving Upstate South Carolina families. Locally owned, bonded and insured, 24/7 available.",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  )
}
