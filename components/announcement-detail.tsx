"use client"

import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const announcements = [
  {
    id: "1",
    title: {
      en: "Signature Hanwoo tasting now available",
      ko: "시그니처 한우 테이스팅 출시",
    },
    content: {
      en: "Experience a curated tasting of our best Korean beef cuts, prepared to highlight each flavor.",
      ko: "엄선한 한우 부위를 코스로 즐길 수 있는 테이스팅 메뉴를 소개합니다.",
    },
    fullContent: {
      en: "We are excited to introduce our signature Hanwoo tasting course. This new menu features a progression of premium cuts, each aged and prepared to emphasize its unique texture and aroma. From delicate sirloin to richly marbled ribeye, our chefs guide you through the best of Korean beef. Reservations are recommended for the tasting experience.",
      ko: "양재 정육 식당의 시그니처 한우 테이스팅 코스를 선보입니다. 부위별 특성을 살려 숙성과 손질을 거친 프리미엄 한우를 코스로 즐길 수 있으며, 등심부터 마블링이 풍부한 꽃등심까지 깊은 풍미를 경험하실 수 있습니다. 테이스팅 코스는 예약을 권장드립니다.",
    },
    date: "2024-02-12",
    type: {
      en: "Menu",
      ko: "메뉴",
    },
    featured: true,
  },
  {
    id: "2",
    title: {
      en: "Corporate catering service expanded",
      ko: "기업 케이터링 서비스 확대",
    },
    content: {
      en: "We now offer tailored beef menus for meetings and corporate events with on-site service.",
      ko: "기업 행사와 미팅을 위한 맞춤형 소고기 케이터링 서비스를 제공합니다.",
    },
    fullContent: {
      en: "Our F&B team has expanded corporate catering support. We provide curated beef menus, professional on-site service, and flexible setup options for meetings, launches, and special events. Contact us to customize portions, cuts, and presentation to match your occasion.",
      ko: "F&B 서비스 운영 범위를 넓혀 기업 케이터링을 강화했습니다. 회의, 런칭 행사, 기념 이벤트에 맞춘 맞춤형 소고기 메뉴와 전문 서비스 스태프를 제공합니다. 행사 규모와 콘셉트에 맞춘 구성을 상담해 드립니다.",
    },
    date: "2024-02-05",
    type: {
      en: "Service",
      ko: "서비스",
    },
    featured: false,
  },
  {
    id: "3",
    title: {
      en: "Butcher shop consultation hours",
      ko: "정육 상담 운영 시간 안내",
    },
    content: {
      en: "Get personalized cut recommendations and cooking guidance from our butcher team.",
      ko: "정육 전문가가 부위 추천과 조리 방법을 상담해 드립니다.",
    },
    fullContent: {
      en: "Visit us during consultation hours for personalized recommendations on beef cuts, doneness, and pairing ideas. Our butcher team will guide you to the right selection based on your preferences and occasion. Walk-ins are welcome, but reservations ensure the best service.",
      ko: "정육 상담 시간에는 부위 선택과 익힘 정도, 페어링에 대한 맞춤형 안내를 받으실 수 있습니다. 고객님의 취향과 상황에 맞는 최적의 선택을 추천해 드리며, 예약 시 더 원활한 상담이 가능합니다.",
    },
    date: "2024-01-28",
    type: {
      en: "Guide",
      ko: "안내",
    },
    featured: false,
  },
]

interface AnnouncementDetailProps {
  id: string
}

export function AnnouncementDetail({ id }: AnnouncementDetailProps) {
  const t = useTranslations("announcements")
  const locale = useLocale()

  const announcement = announcements.find((a) => a.id === id)

  if (!announcement) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Announcement not found</h1>
            <Link href={`/${locale}`}>
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("backToList")}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}#announcements`}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToList")}
          </Link>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant={announcement.featured ? "default" : "secondary"}>
                  {announcement.type[locale as "en" | "ko"]}
                </Badge>
                {announcement.featured && <Badge className="bg-orange-500">{t("featured")}</Badge>}
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">{announcement.title[locale as "en" | "ko"]}</CardTitle>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(announcement.date).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US")}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">{announcement.fullContent[locale as "en" | "ko"]}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
