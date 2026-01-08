"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoManager } from "./logo-manager"
import { FaviconManager } from "./favicon-manager"
import { SliderManager } from "./slider-manager"
import { ContentEditor } from "./content-editor"
import { ContactManager } from "./contact-manager"
import { Settings, ImageIcon, FileText, MessageSquare, Upload, Newspaper } from "lucide-react"
import { PostManager } from "./post-manager"
import { GalleryManager } from "./gallery-manager"

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/40 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-500">Franchise Admin</p>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your franchise website content, visuals, and key updates.</p>
        </div>

        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 gap-2 rounded-2xl bg-white/80 p-2 shadow-sm md:grid-cols-7">
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="slider" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Slider
            </TabsTrigger>
            <TabsTrigger value="branding" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Branding
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contacts
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <PostManager />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManager />
          </TabsContent>

          <TabsContent value="content">
            <ContentEditor />
          </TabsContent>

          <TabsContent value="slider">
            <SliderManager />
          </TabsContent>

          <TabsContent value="branding">
            <div className="grid md:grid-cols-2 gap-6">
              <LogoManager />
              <FaviconManager />
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <ContactManager />
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Additional settings and configurations will be available here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
