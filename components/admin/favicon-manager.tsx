"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

export function FaviconManager() {
  const [favicon, setFavicon] = useState<string | null>(null)
  const [faviconFile, setFaviconFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFaviconFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setFavicon(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (faviconFile) {
      // Handle favicon upload logic here
      console.log("Uploading favicon:", faviconFile)
    }
  }

  const handleRemove = () => {
    setFavicon(null)
    setFaviconFile(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Favicon Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="favicon-upload">Upload Favicon</Label>
          <Input id="favicon-upload" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
          <p className="text-sm text-gray-500 mt-1">Recommended: 32x32 or 16x16 pixels, ICO or PNG format</p>
        </div>

        {favicon && (
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Favicon</span>
                <Button variant="ghost" size="sm" onClick={handleRemove} className="text-red-500 hover:text-red-700">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <img src={favicon || "/placeholder.svg"} alt="Favicon preview" className="h-8 w-8 object-contain" />
            </div>
            <Button onClick={handleUpload} className="w-full">
              Save Favicon
            </Button>
          </div>
        )}

        {!favicon && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No favicon uploaded</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
