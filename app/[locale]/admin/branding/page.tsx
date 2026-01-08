import { LogoManager } from "@/components/admin/logo-manager"
import { FaviconManager } from "@/components/admin/favicon-manager"

export default function AdminBrandingPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Branding Assets</h2>
        <p className="mt-2 text-gray-600">Manage logos, favicons, and brand imagery across the site.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <LogoManager />
        <FaviconManager />
      </div>
    </section>
  )
}
