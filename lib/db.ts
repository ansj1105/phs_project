import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data")
const dbPath = path.join(dataDir, "db.json")

type DatabaseShape = {
  posts: PostRecord[]
  gallery: GalleryRecord[]
}

export type PostRecord = {
  id: number
  titleEn: string
  titleKo: string
  contentEn: string
  contentKo: string
  imageUrl: string | null
  createdAt: string
}

export type GalleryRecord = {
  id: number
  captionEn: string
  captionKo: string
  imageUrl: string
  createdAt: string
}

const defaultSeed: DatabaseShape = {
  posts: [
    {
      id: 1,
      titleEn: "Seasonal brunch menu launch",
      titleKo: "시즌 브런치 메뉴 출시",
      contentEn:
        "Our franchise kitchens are introducing a lighter brunch lineup with locally sourced produce and chef-led plating standards.",
      contentKo: "프랜차이즈 전 지점에서 로컬 재료와 셰프 레시피로 구성된 가벼운 브런치 라인업을 선보입니다.",
      imageUrl: "/placeholder.svg?height=320&width=640",
      createdAt: "2024-03-20T09:00:00.000Z",
    },
    {
      id: 2,
      titleEn: "New store opening benefits",
      titleKo: "신규 매장 오픈 혜택",
      contentEn:
        "Celebrate the new flagship opening with limited-time tasting sets, member gifts, and curated dining experiences.",
      contentKo: "신규 플래그십 오픈을 기념해 한정 테이스팅 세트와 멤버십 혜택을 제공합니다.",
      imageUrl: "/placeholder.svg?height=320&width=640",
      createdAt: "2024-03-12T09:00:00.000Z",
    },
    {
      id: 3,
      titleEn: "Franchise hospitality training",
      titleKo: "프랜차이즈 서비스 교육",
      contentEn:
        "Every team member completes our signature hospitality program to deliver consistent guest experiences.",
      contentKo: "모든 지점에서 동일한 고객 경험을 위해 시그니처 서비스 교육을 진행합니다.",
      imageUrl: "/placeholder.svg?height=320&width=640",
      createdAt: "2024-03-04T09:00:00.000Z",
    },
  ],
  gallery: [
    {
      id: 1,
      captionEn: "Chef-crafted signature pasta",
      captionKo: "셰프 시그니처 파스타",
      imageUrl: "/placeholder.svg?height=400&width=400",
      createdAt: "2024-03-18T09:00:00.000Z",
    },
    {
      id: 2,
      captionEn: "Warm dining interiors",
      captionKo: "따뜻한 다이닝 공간",
      imageUrl: "/placeholder.svg?height=400&width=400",
      createdAt: "2024-03-17T09:00:00.000Z",
    },
    {
      id: 3,
      captionEn: "Seasonal dessert bar",
      captionKo: "시즌 디저트 바",
      imageUrl: "/placeholder.svg?height=400&width=400",
      createdAt: "2024-03-15T09:00:00.000Z",
    },
    {
      id: 4,
      captionEn: "Team tasting session",
      captionKo: "팀 테이스팅 세션",
      imageUrl: "/placeholder.svg?height=400&width=400",
      createdAt: "2024-03-11T09:00:00.000Z",
    },
  ],
}

const ensureDatabase = (): DatabaseShape => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify(defaultSeed, null, 2))
    return defaultSeed
  }

  const raw = fs.readFileSync(dbPath, "utf-8")
  try {
    return JSON.parse(raw) as DatabaseShape
  } catch {
    fs.writeFileSync(dbPath, JSON.stringify(defaultSeed, null, 2))
    return defaultSeed
  }
}

const writeDatabase = (data: DatabaseShape) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}

const nextId = (items: { id: number }[]) => {
  if (items.length === 0) {
    return 1
  }
  return Math.max(...items.map((item) => item.id)) + 1
}

export const getPosts = (limit = 6): PostRecord[] => {
  const db = ensureDatabase()
  return [...db.posts].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, limit)
}

export const getPostById = (id: number): PostRecord | undefined => {
  const db = ensureDatabase()
  return db.posts.find((post) => post.id === id)
}

export const createPost = (data: {
  titleEn: string
  titleKo: string
  contentEn: string
  contentKo: string
  imageUrl?: string | null
}): PostRecord => {
  const db = ensureDatabase()
  const post: PostRecord = {
    id: nextId(db.posts),
    titleEn: data.titleEn,
    titleKo: data.titleKo,
    contentEn: data.contentEn,
    contentKo: data.contentKo,
    imageUrl: data.imageUrl ?? null,
    createdAt: new Date().toISOString(),
  }
  db.posts.push(post)
  writeDatabase(db)
  return post
}

export const getGalleryItems = (limit = 8): GalleryRecord[] => {
  const db = ensureDatabase()
  return [...db.gallery].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, limit)
}

export const createGalleryItem = (data: { captionEn: string; captionKo: string; imageUrl: string }): GalleryRecord => {
  const db = ensureDatabase()
  const item: GalleryRecord = {
    id: nextId(db.gallery),
    captionEn: data.captionEn,
    captionKo: data.captionKo,
    imageUrl: data.imageUrl,
    createdAt: new Date().toISOString(),
  }
  db.gallery.push(item)
  writeDatabase(db)
  return item
}
