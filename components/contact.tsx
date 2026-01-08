"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
            <p className="text-xl text-white/70">{t("subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-cyan-300" />
                    {t("location")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">
                    {t("details.address")}
                    <br />
                    {t("details.city")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-cyan-300" />
                    {t("phone")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{t("contactInfo.phoneValue")}</p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-cyan-300" />
                    {t("email")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{t("contactInfo.emailValue")}</p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cyan-300" />
                    {t("hours")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-white/70 space-y-1">
                    <p>{t("schedule.weekdays")}</p>
                    <p>{t("schedule.weekends")}</p>
                    <p>{t("schedule.sunday")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-white/10 bg-white/5 text-white shadow-[0_0_30px_rgba(59,130,246,0.12)]">
              <CardHeader>
                <CardTitle>{t("sendMessage")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white/80">
                      {t("form.name")}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80">
                      {t("form.email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80">
                      {t("form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white/80">
                      {t("form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/50"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
