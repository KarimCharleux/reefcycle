import Link from "next/link"
import { ArrowRight, Check, Globe, LineChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SponsorshipSection() {
  return (
    <section id="sponsorship" className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Sponsorship Program</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join our mission to restore marine ecosystems through our innovative sponsorship program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Business Model</h3>
            <p className="text-muted-foreground">
              ReefCycle operates on a hybrid financing model that combines construction partnerships, public subsidies,
              and corporate sponsorships. This diversified approach ensures the sustainability of our projects while
              creating value for all stakeholders.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Construction Partnerships</h4>
                  <p className="text-sm text-muted-foreground">
                    We partner with construction companies to source recycled concrete, providing them with a
                    sustainable waste management solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Public Funding</h4>
                  <p className="text-sm text-muted-foreground">
                    We leverage grants from maritime and environmental organizations aligned with our conservation
                    goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Corporate Sponsorships</h4>
                  <p className="text-sm text-muted-foreground">
                    Our sponsorship program allows companies to finance reef plots and receive regular updates on their
                    environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Direct Sales</h4>
                  <p className="text-sm text-muted-foreground">
                    We sell artificial reefs to communities and organizations for specific restoration projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Sponsorship Benefits
                </CardTitle>
                <CardDescription>Why partner with ReefCycle?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Finance a dedicated reef plot</span> with your company
                    name and contribute directly to marine conservation
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Receive regular reports</span> on the evolution of
                    your sponsored ecosystem with detailed metrics
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Access virtual tours</span> of the reefs via virtual
                    reality for immersive experiences
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Communicate your environmental commitment</span> with
                    concrete data and visual content for your CSR reporting
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Participate in deployment events</span> and gain
                    visibility through our communication channels
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#contact">
                    Become a Sponsor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-primary" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By sponsoring a ReefCycle project, you directly contribute to marine ecosystem restoration. Each reef
                provides habitat for hundreds of marine species and helps rebuild biodiversity in degraded areas. Your
                sponsorship creates a lasting positive impact on ocean health.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                CSR Enhancement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our sponsorship program provides tangible environmental credentials for your Corporate Social
                Responsibility initiatives. With regular reports and visual content, you can effectively communicate
                your commitment to sustainability to stakeholders and customers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="mr-2 h-5 w-5 text-primary" />
                Transparent Reporting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our smart sensors provide real-time data on the health and growth of your sponsored reef. You'll receive
                regular reports with key metrics on biodiversity, water quality, and ecosystem development, allowing you
                to track your investment's impact over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

