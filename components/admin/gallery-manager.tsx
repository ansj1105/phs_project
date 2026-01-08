"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon, Save } from "lucide-react"

type GalleryItem = {
  id: number
  captionEn: string
  captionKo: string
  imageUrl: string
  createdAt: string
}

const emptyForm = {
  captionEn: "",
  captionKo: "",
  imageUrl: "",
}

export function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [form, setForm] = useState(emptyForm)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchItems = async () => {
    const response = await fetch("/api/gallery")
    const data = (await response.json()) as { items: GalleryItem[] }
    setItems(data.items)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSaving(true)
    setError(null)

    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captionEn: form.captionEn,
          captionKo: form.captionKo,
          imageUrl: form.imageUrl,
        }),
      })

      if (!response.ok) {
        const data = (await response.json()) as { error?: string }
        throw new Error(data.error ?? "Failed to save image.")
      }

      await fetchItems()
      setForm(emptyForm)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to save image.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle>Gallery Preview</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">No images yet. Add a few signature dishes or interiors.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-xl border border-border/60">
              <div className="h-36 w-full bg-muted">
                <img src={item.imageUrl} alt={item.captionEn} className="h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold">{item.captionKo}</p>
                <p className="text-xs text-muted-foreground">{item.captionEn}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle>Add Gallery Image</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="caption-ko">Caption (KO)</Label>
              <Input
                id="caption-ko"
                value={form.captionKo}
                onChange={(event) => setForm((prev) => ({ ...prev, captionKo: event.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="caption-en">Caption (EN)</Label>
              <Input
                id="caption-en"
                value={form.captionEn}
                onChange={(event) => setForm((prev) => ({ ...prev, captionEn: event.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gallery-image-url">Image URL</Label>
              <Input
                id="gallery-image-url"
                value={form.imageUrl}
                onChange={(event) => setForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
                placeholder="https://"
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full gap-2" disabled={isSaving}>
              <Save className="h-4 w-4" />
              {isSaving ? "Saving..." : "Add to Gallery"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
