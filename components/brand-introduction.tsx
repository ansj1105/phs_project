"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Store, Truck, UtensilsCrossed } from "lucide-react"

export function BrandIntroduction() {
  const t = useTranslations("services")

  const features = [
    {
      icon: UtensilsCrossed,
      title: t("items.dining.title"),
      description: t("items.dining.description"),
    },
    {
      icon: Truck,
      title: t("items.distribution.title"),
      description: t("items.distribution.description"),
    },
    {
      icon: Store,
      title: t("items.franchise.title"),
      description: t("items.franchise.description"),
    },
    {
      icon: ClipboardList,
      title: t("items.consulting.title"),
      description: t("items.consulting.description"),
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-100/60 blur-2xl" />
              <img
                src="/images/brand-butcher.svg"
                alt={t("imageAlt")}
                className="rounded-3xl shadow-lg w-full"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <Card key={feature.title} className="border-border/60 bg-white/80 shadow-sm">
                  <CardContent className="p-6 space-y-3">
                    <feature.icon className="h-10 w-10 text-orange-500" />
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("pillars.quality.title")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t("pillars.quality.description")}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("pillars.operations.title")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t("pillars.operations.description")}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("pillars.support.title")}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t("pillars.support.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
