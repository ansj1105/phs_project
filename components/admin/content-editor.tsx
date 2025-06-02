"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

export function ContentEditor() {
  const [introText, setIntroText] = useState(
    `At Delicious Bites, we believe that great food brings people together. Our passion for culinary excellence drives us to create memorable dining experiences using the finest ingredients and time-honored recipes. Whether you're joining us for a casual lunch, romantic dinner, or special celebration, we're committed to serving you exceptional food in a warm, welcoming atmosphere.`,
  )

  const [brandText, setBrandText] =
    useState(`What started as a small family restaurant has grown into a beloved dining destination. Our commitment to quality, innovation, and customer satisfaction has remained unchanged throughout our journey.

We take pride in creating dishes that not only taste amazing but also tell a story of tradition, creativity, and the love we have for food.`)

  const handleSaveIntro = () => {
    // Handle saving introduction text
    console.log("Saving intro text:", introText)
  }

  const handleSaveBrand = () => {
    // Handle saving brand text
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
