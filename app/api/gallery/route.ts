import { NextResponse } from "next/server"
import { createGalleryItem, getGalleryItems } from "@/lib/db"

export async function GET() {
  const items = getGalleryItems(12)
  return NextResponse.json({ items })
}

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    captionEn?: string
    captionKo?: string
    imageUrl?: string
  }

  if (!payload.captionEn || !payload.captionKo || !payload.imageUrl) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const item = createGalleryItem({
    captionEn: payload.captionEn,
    captionKo: payload.captionKo,
    imageUrl: payload.imageUrl,
  })

  return NextResponse.json({ item }, { status: 201 })
}
