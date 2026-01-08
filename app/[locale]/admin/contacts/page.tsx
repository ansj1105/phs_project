import { ContactManager } from "@/components/admin/contact-manager"

export default function AdminContactsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Contact Details</h2>
        <p className="mt-2 text-gray-600">Review contact inquiries and update business contact information.</p>
      </div>
      <ContactManager />
    </section>
  )
}
