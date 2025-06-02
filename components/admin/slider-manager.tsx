"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Edit, Plus } from "lucide-react"

interface SliderImage {
  id: string
  src: string
  title: string
  description: string
}

export function SliderManager() {
  const [images, setImages] = useState<SliderImage[]>([
    {
      id: "1",
      src: "/placeholder.svg?height=300&width=600",
      title: "Authentic Italian Cuisine",
      description: "Experience the finest flavors from Italy",
    },
    {
      id: "2",
      src: "/placeholder.svg?height=300&width=600",
      title: "Farm Fresh Ingredients",
      description: "Sourced locally for the best quality",
    },
  ])
  const [editingImage, setEditingImage] = useState<SliderImage | null>(null)
  const [newImage, setNewImage] = useState<Partial<SliderImage>>({})
  const [imageFile, setImageFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setNewImage((prev) => ({
          ...prev,
          src: e.target?.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddImage = () => {
    if (newImage.src && newImage.title && newImage.description) {
      const image: SliderImage = {
        id: Date.now().toString(),
        src: newImage.src,
        title: newImage.title,
        description: newImage.description,
      }
      setImages((prev) => [...prev, image])
      setNewImage({})
      setImageFile(null)
    }
  }

  const handleEditImage = (image: SliderImage) => {
    setEditingImage(image)
  }

  const handleUpdateImage = () => {
    if (editingImage) {
      setImages((prev) => prev.map((img) => (img.id === editingImage.id ? editingImage : img)))
      setEditingImage(null)
    }
  }

  const handleDeleteImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Add New Image */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Slider Image
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="image-upload">Upload Image</Label>
            <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
          </div>

          <div>
            <Label htmlFor="image-title">Title</Label>
            <Input
              id="image-title"
              value={newImage.title || ""}
              onChange={(e) => setNewImage((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Enter image title"
            />
          </div>

          <div>
            <Label htmlFor="image-description">Description</Label>
            <Textarea
              id="image-description"
              value={newImage.description || ""}
              onChange={(e) => setNewImage((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Enter image description"
              rows={3}
            />
          </div>

          {newImage.src && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <img
                src={newImage.src || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-32 object-cover rounded"
              />
            </div>
          )}

          <Button
            onClick={handleAddImage}
            className="w-full"
            disabled={!newImage.src || !newImage.title || !newImage.description}
          >
            Add Image
          </Button>
        </CardContent>
      </Card>

      {/* Existing Images */}
      <Card>
        <CardHeader>
          <CardTitle>Current Slider Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg p-4">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <h4 className="font-semibold mb-1">{image.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{image.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleEditImage(image)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteImage(image.id)}>
                    <X className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Modal */}
      {editingImage && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Slider Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                value={editingImage.title}
                onChange={(e) => setEditingImage((prev) => (prev ? { ...prev, title: e.target.value } : null))}
              />
            </div>
            <div>
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                value={editingImage.description}
                onChange={(e) => setEditingImage((prev) => (prev ? { ...prev, description: e.target.value } : null))}
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleUpdateImage}>Save Changes</Button>
              <Button variant="outline" onClick={() => setEditingImage(null)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
