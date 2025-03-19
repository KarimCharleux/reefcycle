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
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 h-full flex items-center">
        <div className="flex flex-col items-start gap-6 text-white bg-black/40 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-shadow">
            Transforming Concrete
            <br />
            <span className="text-primary">Reviving Oceans</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-white sm:text-xl sm:leading-8 font-medium">
            ReefCycle transforms recycled concrete into intelligent artificial reefs, addressing construction waste
            management while restoring marine ecosystems.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/#technology">
                Discover Our Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-white text-white font-semibold"
            >
              <Link href="/#sponsorship">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

