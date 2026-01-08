"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Heart, Star } from "lucide-react"

export function BrandIntroduction() {
  const t = useTranslations("brand")

  const features = [
    {
      icon: ChefHat,
      title: t("features.chefs.title"),
      description: t("features.chefs.description"),
    },
    {
      icon: Heart,
      title: t("features.love.title"),
      description: t("features.love.description"),
    },
    {
      icon: Star,
      title: t("features.quality.title"),
      description: t("features.quality.description"),
    },
  ]

  return (
    <section id="brand" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-100/60 blur-2xl" />
              <img
                src="/images/brand-butcher.svg"
                alt="Butchery craftsmanship"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{t("journeyTitle")}</h3>
              <p className="text-muted-foreground">{t("journeyContent1")}</p>
              <p className="text-muted-foreground">{t("journeyContent2")}</p>
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                <div className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-xl font-semibold">2015</p>
                  <p className="text-muted-foreground">{t("milestone1")}</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-xl font-semibold">8K+</p>
                  <p className="text-muted-foreground">{t("milestone2")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
