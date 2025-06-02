"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const announcements = [
  {
    id: "1",
    title: {
      en: "New Summer Menu Launch",
      ko: "새로운 여름 메뉴 출시",
    },
    content: {
      en: "Discover our exciting new summer menu featuring fresh seasonal ingredients and innovative dishes.",
      ko: "신선한 제철 재료와 혁신적인 요리로 구성된 흥미진진한 새로운 여름 메뉴를 만나보세요.",
    },
    fullContent: {
      en: "We are thrilled to announce the launch of our brand new summer menu! This season, our chefs have crafted an exceptional collection of dishes that celebrate the vibrant flavors of summer. From refreshing salads made with locally-sourced greens to grilled specialties that capture the essence of outdoor dining, every dish has been carefully designed to provide you with an unforgettable culinary experience. Our new menu features seasonal ingredients at their peak freshness, innovative cooking techniques, and bold flavor combinations that will delight your taste buds. Come and experience the taste of summer at Delicious Bites!",
      ko: "완전히 새로운 여름 메뉴 출시를 발표하게 되어 매우 기쁩니다! 이번 시즌, 저희 셰프들은 여름의 생생한 맛을 기념하는 뛰어난 요리 컬렉션을 만들어냈습니다. 현지에서 조달한 신선한 채소로 만든 상쾌한 샐러드부터 야외 식사의 정수를 담은 그릴 특선 요리까지, 모든 요리는 잊을 수 없는 요리 경험을 제공하도록 세심하게 설계되었습니다. 저희 새 메뉴는 최고의 신선함을 자랑하는 제철 재료, 혁신적인 요리 기법, 그리고 여러분의 미각을 즐겁게 할 대담한 맛의 조합을 특징으로 합니다. 딜리셔스 바이츠에서 여름의 맛을 경험해보세요!",
    },
    date: "2024-01-15",
    type: {
      en: "Menu Update",
      ko: "메뉴 업데이트",
    },
    featured: true,
  },
  {
    id: "2",
    title: {
      en: "Extended Weekend Hours",
      ko: "주말 운영시간 연장",
    },
    content: {
      en: "We are now open until 11 PM on Fridays and Saturdays to serve you better.",
      ko: "더 나은 서비스를 위해 금요일과 토요일에 오후 11시까지 운영합니다.",
    },
    fullContent: {
      en: "Great news for our valued customers! Starting this month, we are extending our weekend hours to better accommodate your dining needs. We will now be open until 11 PM on both Fridays and Saturdays, giving you more flexibility to enjoy our delicious food and warm atmosphere. Whether you're planning a late dinner date, celebrating with friends, or simply want to unwind after a long week, our extended hours ensure that you can always find a perfect time to visit us. Our full menu will be available during these extended hours, and our dedicated staff will be ready to provide you with the same exceptional service you've come to expect from Delicious Bites.",
      ko: "소중한 고객 여러분께 좋은 소식입니다! 이번 달부터 고객님들의 식사 요구에 더 잘 부응하기 위해 주말 운영시간을 연장합니다. 이제 금요일과 토요일 모두 오후 11시까지 운영하여, 저희의 맛있는 음식과 따뜻한 분위기를 즐기실 수 있는 더 많은 시간을 제공합니다. 늦은 저녁 데이트를 계획하시든, 친구들과 축하하시든, 또는 긴 한 주를 마치고 휴식을 취하고 싶으시든, 연장된 운영시간으로 언제든 저희를 방문하실 완벽한 시간을 찾으실 수 있습니다. 연장된 시간 동안에도 전체 메뉴를 이용하실 수 있으며, 저희 직원들이 딜리셔스 바이츠에서 기대하셨던 동일한 뛰어난 서비스를 제공할 준비가 되어 있습니다.",
    },
    date: "2024-01-10",
    type: {
      en: "Hours Update",
      ko: "운영시간 업데이트",
    },
    featured: false,
  },
  {
    id: "3",
    title: {
      en: "Private Event Bookings",
      ko: "프라이빗 이벤트 예약",
    },
    content: {
      en: "Book our private dining room for your special occasions. Perfect for birthdays, anniversaries, and corporate events.",
      ko: "특별한 행사를 위해 저희 프라이빗 다이닝룸을 예약하세요. 생일, 기념일, 기업 행사에 완벽합니다.",
    },
    fullContent: {
      en: "Make your special occasions truly memorable with our exclusive private dining room! Whether you're celebrating a milestone birthday, commemorating an anniversary, hosting a corporate event, or gathering for any special occasion, our private dining space offers the perfect intimate setting. Our private room can accommodate up to 20 guests and features elegant décor, personalized service, and a customizable menu tailored to your preferences. Our experienced event coordinators will work closely with you to ensure every detail is perfect, from the table settings to the wine pairings. Contact us today to discuss your event requirements and let us help you create an unforgettable experience for you and your guests.",
      ko: "저희 독점 프라이빗 다이닝룸으로 특별한 행사를 정말 기억에 남게 만들어보세요! 중요한 생일을 축하하시든, 기념일을 기념하시든, 기업 행사를 주최하시든, 또는 어떤 특별한 행사를 위해 모이시든, 저희 프라이빗 다이닝 공간은 완벽한 친밀한 분위기를 제공합니다. 저희 프라이빗룸은 최대 20명의 손님을 수용할 수 있으며, 우아한 장식, 개인 맞춤 서비스, 그리고 고객님의 취향에 맞춘 맞춤형 메뉴를 특징으로 합니다. 경험 많은 이벤트 코디네이터들이 테이블 세팅부터 와인 페어링까지 모든 세부사항이 완벽하도록 고객님과 긴밀히 협력할 것입니다. 오늘 연락하셔서 이벤트 요구사항을 논의하고 고객님과 손님들을 위한 잊을 수 없는 경험을 만들어드리겠습니다.",
    },
    date: "2024-01-05",
    type: {
      en: "Service",
      ko: "서비스",
    },
    featured: false,
  },
]

export function Announcements() {
  const t = useTranslations("announcements")
  const locale = useLocale()

  return (
    <section id="announcements" className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={announcement.featured ? "ring-2 ring-orange-500" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={announcement.featured ? "default" : "secondary"}>
                      {announcement.type[locale as "en" | "ko"]}
                    </Badge>
                    {announcement.featured && <Badge className="bg-orange-500">Featured</Badge>}
                  </div>
                  <CardTitle className="text-xl">{announcement.title[locale as "en" | "ko"]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{announcement.content[locale as "en" | "ko"]}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(announcement.date).toLocaleDateString()}
                    </div>
                    <Link href={`/${locale}/announcements/${announcement.id}`}>
                      <Button variant="outline" size="sm">
                        {t("readMore")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
