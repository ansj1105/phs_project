import { getTranslations } from "next-intl/server"
import { MapPinned, ShieldCheck, Sparkles, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export async function Gallery() {
  const t = await getTranslations("network")

  const items = [
    {
      icon: MapPinned,
      title: t("items.coverage.title"),
      description: t("items.coverage.description"),
    },
    {
      icon: Truck,
      title: t("items.logistics.title"),
      description: t("items.logistics.description"),
    },
    {
      icon: ShieldCheck,
      title: t("items.quality.title"),
      description: t("items.quality.description"),
    },
    {
      icon: Sparkles,
      title: t("items.training.title"),
      description: t("items.training.description"),
    },
  ]

  return (
    <section id="network" className="py-20 bg-muted/40">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <Card key={item.title} className="border-border/60 bg-white/80 shadow-sm">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
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
