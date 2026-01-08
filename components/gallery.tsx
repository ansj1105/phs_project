import { getLocale, getTranslations } from "next-intl/server"
import { getGalleryItems } from "@/lib/db"

export async function Gallery() {
  const t = await getTranslations("gallery")
  const locale = await getLocale()
  const items = getGalleryItems(8)

  return (
    <section id="gallery" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/70 bg-muted/40 p-10 text-center text-muted-foreground">
              {t("empty")}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => {
                const caption = locale === "ko" ? item.captionKo : item.captionEn
                return (
                  <div
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border border-border/60 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <img
                        src={item.imageUrl}
                        alt={caption}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold">{caption}</p>
                      <p className="text-xs text-muted-foreground">{t("tagline")}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
