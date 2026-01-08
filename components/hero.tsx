"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export function Hero() {
  const t = useTranslations("hero")

  const stats = [
    {
      value: t("stats.sitesValue"),
      label: t("stats.sitesLabel"),
    },
    {
      value: t("stats.partnersValue"),
      label: t("stats.partnersLabel"),
    },
    {
      value: t("stats.satisfactionValue"),
      label: t("stats.satisfactionLabel"),
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-soft-light"
          style={{ backgroundImage: "url(/images/hero-beef-2.svg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
      </div>

      <div className="relative">
        <div className="container px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">{t("eyebrow")}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-white/70 md:text-xl">{t("description")}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                {t("ctaPrimary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 text-white/90"
              >
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/5 backdrop-blur">
          <div className="container px-4 py-8">
            <div className="grid gap-6 text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
