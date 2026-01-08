import { Navbar } from "@/components/navbar"
import { Announcements } from "@/components/announcements"
import { Footer } from "@/components/footer"

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Announcements />
      </main>
      <Footer />
    </div>
  )
}
