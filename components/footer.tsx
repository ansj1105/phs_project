"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-indigo-500 flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.6)]">
                <span className="text-slate-950 font-bold text-sm">YJ</span>
              </div>
              <span className="font-bold text-xl">양재 정육 식당</span>
            </div>
            <p className="text-white/60 mb-4">{t("description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-cyan-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-cyan-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/60 hover:text-cyan-300">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#overview" className="text-white/60 hover:text-cyan-300">
                  {t("links.overview")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-cyan-300">
                  {t("links.services")}
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-white/60 hover:text-cyan-300">
                  {t("links.process")}
                </Link>
              </li>
              <li>
                <Link href="#network" className="text-white/60 hover:text-cyan-300">
                  {t("links.network")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/60 hover:text-cyan-300">
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/60">
                <MapPin className="h-4 w-4 mr-2" />
                {t("address")}
              </li>
              <li className="flex items-center text-white/60">
                <Phone className="h-4 w-4 mr-2" />
                {t("phone")}
              </li>
              <li className="flex items-center text-white/60">
                <Mail className="h-4 w-4 mr-2" />
                {t("email")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("openingHours")}</h3>
            <ul className="space-y-2 text-white/60">
              <li>{t("hours.weekdays")}</li>
              <li>{t("hours.weekends")}</li>
              <li>{t("hours.sunday")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
