"use client"

import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"

export function Introduction() {
  const t = useTranslations("introduction")

  return (
    <section id="introduction" className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("title")}</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">{t("content")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
