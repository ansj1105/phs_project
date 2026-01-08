"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Save } from "lucide-react"

type Post = {
  id: number
  titleEn: string
  titleKo: string
  contentEn: string
  contentKo: string
  imageUrl: string | null
  createdAt: string
}

const emptyForm = {
  titleEn: "",
  titleKo: "",
  contentEn: "",
  contentKo: "",
  imageUrl: "",
}

export function PostManager() {
  const [posts, setPosts] = useState<Post[]>([])
  const [form, setForm] = useState(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    const response = await fetch("/api/posts")
    const data = (await response.json()) as { posts: Post[] }
    setPosts(data.posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSaving(true)
    setError(null)

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titleEn: form.titleEn,
          titleKo: form.titleKo,
          contentEn: form.contentEn,
          contentKo: form.contentKo,
          imageUrl: form.imageUrl || undefined,
        }),
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string }
        throw new Error(data.error ?? "Failed to save post.")
      }

      await fetchPosts()
      setForm(emptyForm)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to save post.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle>Latest Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {posts.length === 0 && (
            <p className="text-sm text-muted-foreground">No posts yet. Create the first update for your franchise.</p>
          )}
          {posts.map((post) => (
            <div key={post.id} className="flex gap-4 rounded-xl border border-border/60 p-4">
              <div className="h-20 w-24 overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt={post.titleEn} className="h-full w-full object-cover" />
                ) : (
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold">{post.titleKo}</p>
                    <p className="text-sm text-muted-foreground">{post.titleEn}</p>
                  </div>
                  <Badge variant="secondary">{new Date(post.createdAt).toLocaleDateString()}</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.contentKo}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-ko">Title (KO)</Label>
              <Input
                id="title-ko"
                value={form.titleKo}
                onChange={(event) => setForm((prev) => ({ ...prev, titleKo: event.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title-en">Title (EN)</Label>
              <Input
                id="title-en"
                value={form.titleEn}
                onChange={(event) => setForm((prev) => ({ ...prev, titleEn: event.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content-ko">Content (KO)</Label>
              <Textarea
                id="content-ko"
                value={form.contentKo}
                onChange={(event) => setForm((prev) => ({ ...prev, contentKo: event.target.value }))}
                rows={4}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content-en">Content (EN)</Label>
              <Textarea
                id="content-en"
                value={form.contentEn}
                onChange={(event) => setForm((prev) => ({ ...prev, contentEn: event.target.value }))}
                rows={4}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                value={form.imageUrl}
                onChange={(event) => setForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
                placeholder="https://"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full gap-2" disabled={isSaving}>
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Publish Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
