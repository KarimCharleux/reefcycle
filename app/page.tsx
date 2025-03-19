import { BarChart3, Recycle, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"
import { ImpactSection } from "@/components/impact-section"
import { PartnersSection } from "@/components/partners-section"
import { SponsorshipSection } from "@/components/sponsorship-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Mission</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              ReefCycle is dedicated to restoring marine ecosystems by transforming recycled concrete into smart
              artificial reefs. We address two major challenges: construction waste management and the degradation of
              marine ecosystems.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Restore</CardTitle>
                  <Waves className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Restore and preserve marine ecosystems using innovative technologies and recycled materials
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Innovate</CardTitle>
                  <BarChart3 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Develop smart artificial reefs with integrated sensors to monitor ecosystem evolution
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sustain</CardTitle>
                  <Recycle className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create a sustainable and transparent economic model through partnerships and sponsorships
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="vision" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="vision">Our Vision</TabsTrigger>
                  <TabsTrigger value="objectives">Our Objectives</TabsTrigger>
                </TabsList>
                <TabsContent value="vision" className="p-4">
                  <p className="text-muted-foreground">
                    To become the European leader in the restoration of marine ecosystems through an approach combining
                    technological innovation and the circular economy.
                  </p>
                </TabsContent>
                <TabsContent value="objectives" className="space-y-4 p-4">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Developing and deploying smart artificial reefs in degraded marine areas</li>
                    <li>
                      Establish a strong network of partnerships with construction companies for the supply of recycled
                      concrete
                    </li>
                    <li>
                      Create an attractive sponsorship system to finance the maintenance and expansion of the reef
                      network
                    </li>
                    <li>
                      Demonstrate through scientific data the effectiveness of our approach on marine biodiversity
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <TechnologySection />
        <ImpactSection />
        <PartnersSection />
        <SponsorshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

