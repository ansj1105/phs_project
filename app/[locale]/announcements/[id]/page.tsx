import { AnnouncementDetail } from "@/components/announcement-detail"

interface AnnouncementPageProps {
  params: {
    locale: string
    id: string
  }
}

export default function AnnouncementPage({ params }: AnnouncementPageProps) {
  return <AnnouncementDetail id={params.id} />
}
