import { getTranslations } from "next-intl/server"
import { Card, CardContent } from "@/components/ui/card"

export async function Announcements() {
  const t = await getTranslations("process")

  const steps = [
    {
      step: "01",
      title: t("steps.discovery.title"),
      description: t("steps.discovery.description"),
    },
    {
      step: "02",
      title: t("steps.design.title"),
      description: t("steps.design.description"),
    },
    {
      step: "03",
      title: t("steps.launch.title"),
      description: t("steps.launch.description"),
    },
    {
      step: "04",
      title: t("steps.growth.title"),
      description: t("steps.growth.description"),
    },
  ]

  return (
    <section id="process" className="bg-gradient-to-b from-white via-orange-50/40 to-transparent py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <Card key={step.step} className="border-border/60 bg-white/80 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
