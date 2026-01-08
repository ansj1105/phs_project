"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">YJ</span>
              </div>
              <span className="font-bold text-xl">양재 정육 식당</span>
            </div>
            <p className="text-gray-400 mb-4">{t("description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#introduction" className="text-gray-400 hover:text-orange-500">
                  {t("links.introduction")}
                </Link>
              </li>
              <li>
                <Link href="#brand" className="text-gray-400 hover:text-orange-500">
                  {t("links.brand")}
                </Link>
              </li>
              <li>
                <Link href="#announcements" className="text-gray-400 hover:text-orange-500">
                  {t("links.announcements")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-orange-500">
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                {t("address")}
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                {t("phone")}
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                {t("email")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("openingHours")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("hours.weekdays")}</li>
              <li>{t("hours.weekends")}</li>
              <li>{t("hours.sunday")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
