import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Introduction } from "@/components/introduction"
import { BrandIntroduction } from "@/components/brand-introduction"
import { Announcements } from "@/components/announcements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <BrandIntroduction />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
