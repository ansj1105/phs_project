import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminSettingsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Website Settings</h2>
        <p className="mt-2 text-gray-600">Configure global settings and operational preferences.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Settings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Additional settings and configurations will be available here.</p>
        </CardContent>
      </Card>
    </section>
  )
}
