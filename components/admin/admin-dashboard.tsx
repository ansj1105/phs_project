"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoManager } from "./logo-manager"
import { FaviconManager } from "./favicon-manager"
import { SliderManager } from "./slider-manager"
import { ContentEditor } from "./content-editor"
import { ContactManager } from "./contact-manager"
import { Settings, ImageIcon, FileText, MessageSquare, Upload } from "lucide-react"

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your F&B website content and settings</p>
        </div>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
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
