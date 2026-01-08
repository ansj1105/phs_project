import Link from "next/link"
import { getLocale, getTranslations } from "next-intl/server"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getPosts } from "@/lib/db"

export async function Announcements() {
  const t = await getTranslations("announcements")
  const locale = await getLocale()
  const posts = getPosts(6)

  return (
    <section id="announcements" className="bg-gradient-to-b from-white via-orange-50/30 to-transparent py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => {
              const title = locale === "ko" ? post.titleKo : post.titleEn
              const content = locale === "ko" ? post.contentKo : post.contentEn
              const isFresh = index === 0

              return (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-border/60 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-orange-100 via-white to-orange-50" />
                    )}
                    {isFresh && (
                      <Badge className="absolute left-4 top-4 bg-orange-500 text-white shadow">NEW</Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-snug">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.createdAt).toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US")}
                      </span>
                      <Link href={`/${locale}/announcements/${post.id}`}>
                        <Button variant="outline" size="sm">
                          {t("readMore")}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {posts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border/70 bg-white/80 p-10 text-center text-muted-foreground">
              {t("empty")}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
