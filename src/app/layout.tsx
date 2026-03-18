import type { Metadata, Viewport } from "next"
import { Lato, Playfair_Display } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
})

export const viewport: Viewport = {
  themeColor: "#1B3D48",
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
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
