import { getLocale, getTranslations } from "next-intl/server"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPostById } from "@/lib/db"

interface AnnouncementDetailProps {
  id: string
}

export async function AnnouncementDetail({ id }: AnnouncementDetailProps) {
  const t = await getTranslations("announcements")
  const locale = await getLocale()
  const announcement = getPostById(Number(id))

  if (!announcement) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t("notFound")}</h1>
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

  const title = locale === "ko" ? announcement.titleKo : announcement.titleEn
  const content = locale === "ko" ? announcement.contentKo : announcement.contentEn
  const dateLabel = new Date(announcement.createdAt).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}#process`}
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
              <CardTitle className="text-3xl md:text-4xl mb-4">{title}</CardTitle>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {dateLabel}
              </div>
            </CardHeader>
            <CardContent>
              {announcement.imageUrl && (
                <div className="mb-8 overflow-hidden rounded-2xl">
                  <img src={announcement.imageUrl} alt={title} className="h-72 w-full object-cover" />
                </div>
              )}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">{content}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
