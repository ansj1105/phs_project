import { SliderManager } from "@/components/admin/slider-manager"

export default function AdminSliderPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Slider Management</h2>
        <p className="mt-2 text-gray-600">Upload and organize the hero slider visuals and captions.</p>
      </div>
      <SliderManager />
    </section>
  )
}
