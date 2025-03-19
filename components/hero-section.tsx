"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden z-0">
        {isMounted && (
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            src="/background.mp4"
            suppressHydrationWarning
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 h-full flex items-center">
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

