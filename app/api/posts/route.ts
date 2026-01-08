import { NextResponse } from "next/server"
import { createPost, getPosts } from "@/lib/db"

export async function GET() {
  const posts = getPosts(12)
  return NextResponse.json({ posts })
}

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    titleEn?: string
    titleKo?: string
    contentEn?: string
    contentKo?: string
    imageUrl?: string
  }

  if (!payload.titleEn || !payload.titleKo || !payload.contentEn || !payload.contentKo) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  const post = createPost({
    titleEn: payload.titleEn,
    titleKo: payload.titleKo,
    contentEn: payload.contentEn,
    contentKo: payload.contentKo,
    imageUrl: payload.imageUrl ?? null,
  })

  return NextResponse.json({ post }, { status: 201 })
}
