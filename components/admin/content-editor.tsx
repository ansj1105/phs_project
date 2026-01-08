"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

export function ContentEditor() {
  const [introText, setIntroText] = useState(
    `양재 정육 식당은 소고기 전문 정육 노하우를 기반으로 한 F&B 서비스를 운영합니다. 엄선한 한우와 프리미엄 부위를 정성껏 손질해 최상의 식사 경험을 제공하며, 매장 다이닝뿐 아니라 행사와 기업 고객을 위한 맞춤형 메뉴 구성도 제공합니다.`,
  )

  const [brandText, setBrandText] = useState(
    `양재 정육 식당은 정육 유통과 식자재 운영 경험을 바탕으로 고기 본연의 맛을 살리는 다이닝을 시작했습니다. 산지부터 숙성, 손질, 조리까지 전 과정을 직접 관리합니다.

고객의 취향에 맞춘 부위 추천과 최적의 익힘을 제안하여, 소고기의 진가를 가장 맛있게 즐길 수 있도록 돕습니다.`,
  )

  const handleSaveIntro = () => {
    console.log("Saving intro text:", introText)
  }

  const handleSaveBrand = () => {
    console.log("Saving brand text:", brandText)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Introduction Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="intro-text">Introduction Text</Label>
            <Textarea
              id="intro-text"
              value={introText}
              onChange={(e) => setIntroText(e.target.value)}
              rows={6}
              className="mt-1"
            />
          </div>
          <Button onClick={handleSaveIntro} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Introduction
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Brand Introduction Section</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="brand-text">Brand Introduction Text</Label>
            <Textarea
              id="brand-text"
              value={brandText}
              onChange={(e) => setBrandText(e.target.value)}
              rows={8}
              className="mt-1"
            />
          </div>
          <Button onClick={handleSaveBrand} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save Brand Introduction
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
