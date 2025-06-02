"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

export function LogoManager() {
  const [logo, setLogo] = useState<string | null>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setLogoFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (logoFile) {
      // Handle logo upload logic here
      console.log("Uploading logo:", logoFile)
    }
  }

  const handleRemove = () => {
    setLogo(null)
    setLogoFile(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Logo Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="logo-upload">Upload Logo</Label>
          <Input id="logo-upload" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
        </div>

        {logo && (
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Logo</span>
                <Button variant="ghost" size="sm" onClick={handleRemove} className="text-red-500 hover:text-red-700">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <img src={logo || "/placeholder.svg"} alt="Logo preview" className="max-h-20 object-contain" />
            </div>
            <Button onClick={handleUpload} className="w-full">
              Save Logo
            </Button>
          </div>
        )}

        {!logo && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No logo uploaded</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
