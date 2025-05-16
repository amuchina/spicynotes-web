import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../(main)/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auth Pages",
  description: "Authentication pages with a different layout",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </body>
    </html>
  )
}
