"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {BarChart3, Menu} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/reefcycle-long.png" alt="ReefCycle Logo" width={200} height={40} className="object-contain" />
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="/#about" className="transition-colors hover:text-primary">
          About
        </Link>
        <Link href="/#technology" className="transition-colors hover:text-primary">
          Technology
        </Link>
        <Link href="/#impact" className="transition-colors hover:text-primary">
          Impact
        </Link>
        <Link href="/#partners" className="transition-colors hover:text-primary">
          Partners
        </Link>
        <Link href="/#sponsorship" className="transition-colors hover:text-primary">
          Sponsorship
        </Link>
        <Link href="/business" className="transition-colors hover:text-primary flex items-center">
          <BarChart3 className="mr-1 h-4 w-4" />
          Business
        </Link>
        <Link href="/#contact" className="transition-colors hover:text-primary">
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Button asChild className="hidden md:flex">
          <Link href="/#sponsorship">Become a Partner</Link>
        </Button>
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link
                href="/#about"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
              <Link
                href="/#technology"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                Technology
              </Link>
              <Link
                href="/#impact"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                Impact
              </Link>
              <Link
                href="/#partners"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                Partners
              </Link>
              <Link
                href="/#sponsorship"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                Sponsorship
              </Link>
              <Link
                href="/#contact"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="/#sponsorship" onClick={() => setShowMobileMenu(false)}>
                  Become a Partner
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

