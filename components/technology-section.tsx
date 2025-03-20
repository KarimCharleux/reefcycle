import Image from "next/image"
import { ArrowRight, Cpu, Recycle, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnologySection() {
  return (
    <section id="technology" className="bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Innovative Technology</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            ReefCycle combines advanced 3D printing, recycled materials, and smart sensors to create artificial reefs
            that actively promote marine biodiversity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div>
            <Image
              src="/proto.png"
              alt="ReefCycle Logo"
              width={600}
              height={600}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <Recycle className="mr-2 h-5 w-5 text-primary" />
                Optimized Architecture
              </h3>
              <p className="text-muted-foreground">
                Our reefs are specially designed to promote colonization by marine flora and fauna. The structures are
                optimized for coral adhesion and fish habitat, and 3D printed for total customization to local ecosystem
                needs.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-primary" />
                Smart Technology
              </h3>
              <p className="text-muted-foreground">
                Integrated sensors monitor the evolution of underwater ecosystems in real-time, allowing us to adjust
                preservation strategies. Sound transmitters actively attract marine wildlife, stimulating reef
                colonization.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <Waves className="mr-2 h-5 w-5 text-primary" />
                Circular Economy
              </h3>
              <p className="text-muted-foreground">
                We use recycled concrete from construction waste, reducing environmental impact and providing an
                economic advantage to companies in the sector. Our process transforms waste into valuable marine
                habitats.
              </p>
            </div>

            <Button asChild>
              <a href="#impact">
                See Our Environmental Impact
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Production Process</CardTitle>
              <CardDescription>From waste to reef</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal pl-5">
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Collection and processing</span> of recycled concrete
                  from construction sites
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Reef design</span> using 3D modeling software to create
                  optimized structures
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Manufacturing</span> of reefs by 3D printing with
                  bio-active coating
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Installing sensors</span> and sound transmitters for
                  monitoring and attraction
                </li>
                <li className="text-muted-foreground">
                  <span className="font-medium text-foreground">Deployment</span> in targeted marine areas with ongoing
                  monitoring
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Smart Monitoring</CardTitle>
              <CardDescription>Real-time ecosystem data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Our integrated sensor network provides valuable data on:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-muted-foreground">Water temperature and pH levels</li>
                <li className="text-muted-foreground">Salinity and dissolved oxygen</li>
                <li className="text-muted-foreground">Species diversity and population</li>
                <li className="text-muted-foreground">Coral growth and health metrics</li>
                <li className="text-muted-foreground">Current patterns and water quality</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                This data helps us optimize reef designs and provides valuable scientific insights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bioacoustic Attraction</CardTitle>
              <CardDescription>Accelerating colonization</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Our unique sound transmitters:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-muted-foreground">Reproduce natural reef sounds to attract fish</li>
                <li className="text-muted-foreground">Create acoustic cues that signal a healthy habitat</li>
                <li className="text-muted-foreground">Accelerate the colonization process by 40-60%</li>
                <li className="text-muted-foreground">Attract diverse species to establish balanced ecosystems</li>
                <li className="text-muted-foreground">Use minimal power through efficient solar charging</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

