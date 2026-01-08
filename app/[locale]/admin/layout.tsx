import type React from "react"
import Link from "next/link"

const navItems = [
  { label: "Dashboard", href: "" },
  { label: "Content", href: "/content" },
  { label: "Slider", href: "/slider" },
  { label: "Branding", href: "/branding" },
  { label: "Contacts", href: "/contacts" },
  { label: "Settings", href: "/settings" },
]

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">Delicious Bites</p>
            <h1 className="text-xl font-semibold text-gray-900">Admin Center</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="rounded-full bg-gray-100 px-3 py-1 transition hover:bg-orange-100 hover:text-orange-600"
                href={`/${locale}/admin${item.href}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container px-4 py-6">{children}</main>
    </div>
  )
}
