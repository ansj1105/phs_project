import { ContentEditor } from "@/components/admin/content-editor"

export default function AdminContentPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Content Management</h2>
        <p className="mt-2 text-gray-600">Update the homepage story, brand introduction, and announcement teasers.</p>
      </div>
      <ContentEditor />
    </section>
  )
}
