import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-start gap-4 text-white">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            Transforming Concrete
            <br />
            <span className="text-primary">Reviving Oceans</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-gray-300">
            ReefCycle transforms recycled concrete into intelligent artificial reefs, addressing construction waste
            management while restoring marine ecosystems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/#technology">
                Discover Our Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-background/20 hover:bg-background/40 border-white text-white"
            >
              <Link href="/#sponsorship">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

