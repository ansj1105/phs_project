"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  const t = useTranslations("introduction")

  return (
    <section id="introduction" className="py-20 bg-muted/40">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-orange-500">{t("eyebrow")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{t("title")}</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t("content")}</p>
          </div>
          <Card className="border-border/60 bg-white/80 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground">{t("highlightLabel")}</p>
                <p className="text-2xl font-semibold">{t("highlightValue")}</p>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>{t("highlight1")}</p>
                <p>{t("highlight2")}</p>
                <p>{t("highlight3")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
