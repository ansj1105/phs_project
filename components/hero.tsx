"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = useTranslations("hero")

  const heroImages = [
    {
      src: "/images/hero-beef-1.svg",
      alt: "Premium beef platter",
      title: t("slide1.title"),
      description: t("slide1.description"),
    },
    {
      src: "/images/hero-beef-2.svg",
      alt: "Butcher-selected beef cuts",
      title: t("slide2.title"),
      description: t("slide2.description"),
    },
    {
      src: "/images/hero-beef-3.svg",
      alt: "Warm dining atmosphere",
      title: t("slide3.title"),
      description: t("slide3.description"),
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-[78vh] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-5xl px-6 text-center text-white">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-200">Signature Franchise Dining</p>
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">{image.title}</h1>
              <p className="text-lg md:text-2xl text-white/80 mb-8">{image.description}</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="rounded-full bg-orange-500 px-8 hover:bg-orange-600">
                  {t("exploreMenu")}
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10">
                  {t("visitStore")}
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-white/10 p-6 text-left backdrop-blur md:grid-cols-4">
                <div>
                  <p className="text-2xl font-semibold">18+</p>
                  <p className="text-xs text-white/70">Franchise Locations</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">4.9★</p>
                  <p className="text-xs text-white/70">Guest Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">30</p>
                  <p className="text-xs text-white/70">Signature Dishes</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">12h</p>
                  <p className="text-xs text-white/70">Daily Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
