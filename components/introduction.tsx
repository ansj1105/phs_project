"use client"

import { useTranslations } from "next-intl"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  const t = useTranslations("introduction")

  const points = [t("points.one"), t("points.two"), t("points.three")]
  const metrics = [
    { value: t("metrics.experienceValue"), label: t("metrics.experienceLabel") },
    { value: t("metrics.capacityValue"), label: t("metrics.capacityLabel") },
    { value: t("metrics.menuValue"), label: t("metrics.menuLabel") },
  ]

  return (
    <section id="overview" className="py-24 bg-slate-950">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t("title")}</h2>
            <p className="text-lg leading-relaxed text-white/70">{t("content")}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
            <CardContent className="p-6 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{t("panel.eyebrow")}</p>
                <h3 className="text-2xl font-semibold mt-2">{t("panel.title")}</h3>
                <p className="text-sm text-white/70 mt-3">{t("panel.description")}</p>
              </div>
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <p className="font-semibold text-white">{t("panel.items.one.title")}</p>
                  <p>{t("panel.items.one.description")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("panel.items.two.title")}</p>
                  <p>{t("panel.items.two.description")}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">{t("panel.items.three.title")}</p>
                  <p>{t("panel.items.three.description")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
