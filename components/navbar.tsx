"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("navigation")
  const locale = useLocale()

  const navItems = [
    { name: t("introduction"), href: "#introduction" },
    { name: t("brand"), href: "#brand" },
    { name: t("announcements"), href: "#announcements" },
    { name: t("gallery"), href: "#gallery" },
    { name: t("contact"), href: "#contact" },
  ]

  const switchLanguage = (newLocale: string) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">YJ</span>
          </div>
          <span className="font-bold text-xl">양재 정육 식당</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 rounded-full bg-white/60">
                <Globe className="h-4 w-4" />
                {locale.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => switchLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLanguage("ko")}>한국어</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-2">Language</p>
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="justify-start" onClick={() => switchLanguage("en")}>
                    English
                  </Button>
                  <Button variant="ghost" className="justify-start" onClick={() => switchLanguage("ko")}>
                    한국어
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
