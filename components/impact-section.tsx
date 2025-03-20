import Image from "next/image"
import { BarChart, Globe, LineChart, ShieldCheck } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ImpactSection() {
  return (
    <section id="impact" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Environmental Impact</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our artificial reefs address critical environmental challenges while creating measurable positive impacts on
            marine ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Coral Reef Crisis
              </h3>
              <p className="text-muted-foreground">
                Since 1870, more than half of the world's coral reefs have disappeared. According to the IUCN, 90% could
                be threatened by 2050 due to climate change, pollution, and overfishing. Our artificial reefs provide
                critical habitat in degraded areas.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Construction Waste Solution
              </h3>
              <p className="text-muted-foreground">
                The construction sector in France generates approximately 230 million tons of waste each year. Our
                process repurposes concrete waste that would otherwise end up in landfills, creating a circular economy
                solution.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <LineChart className="mr-2 h-5 w-5 text-primary" />
                Measurable Results
              </h3>
              <p className="text-muted-foreground">
                Our smart reefs provide continuous data on ecosystem health and biodiversity. Early deployments have
                shown a 200% increase in fish populations and significant improvements in water quality within 12
                months.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                Alignment with Global Goals
              </h3>
              <p className="text-muted-foreground">
                Our work directly supports UN Sustainable Development Goals 14 (Life Below Water) and 12 (Responsible
                Consumption and Production), as well as the EU's 2030 Biodiversity Strategy.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/proto2.jpg"
              alt="Coral reef restoration impact"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">50%+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg font-medium">of global coral reefs lost since 1870</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">230M</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg font-medium">
                tons of construction waste generated annually in France
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">200%</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg font-medium">
                increase in fish populations around our artificial reefs
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-4xl font-bold text-primary">40-60%</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg font-medium">
                faster colonization with our bioacoustic technology
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

