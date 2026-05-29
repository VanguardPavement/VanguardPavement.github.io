import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center gap-16 p-8">

      {/* Liquid Glass Button */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-white/70 text-xs font-medium tracking-widest uppercase">
          Liquid Glass
        </p>
        <div className="relative h-[200px] w-[400px] flex items-center justify-center">
          <LiquidButton className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            Liquid Glass
          </LiquidButton>
        </div>
      </section>

      {/* Metal Buttons — all color variants */}
      <section className="flex flex-col items-center gap-4">
        <p className="text-white/70 text-xs font-medium tracking-widest uppercase">
          Metal Button Variants
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MetalButton variant="default">Default</MetalButton>
          <MetalButton variant="primary">Primary</MetalButton>
          <MetalButton variant="success">Success</MetalButton>
          <MetalButton variant="error">Error</MetalButton>
          <MetalButton variant="gold">Gold</MetalButton>
          <MetalButton variant="bronze">Bronze</MetalButton>
        </div>
      </section>

    </main>
  )
}
