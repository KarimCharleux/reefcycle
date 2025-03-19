import Image from "next/image"
import { Building, Building2, GraduationCap, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PartnersSection() {
  return (
    <section id="partners" className="bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Partners & Clients</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            ReefCycle collaborates with a diverse network of partners to maximize our impact on marine ecosystems.
          </p>
        </div>

        <Tabs defaultValue="construction" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="construction" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Construction Companies
            </TabsTrigger>
            <TabsTrigger value="organizations" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Environmental Organizations
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Research Institutions
            </TabsTrigger>
            <TabsTrigger value="government" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Government Entities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="construction" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Construction Partner 1"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Partner Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Construction Partner 2"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Partner Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Construction Partner 3"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Partner Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Construction Partner 4"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Partner Name</span>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Construction Partners</CardTitle>
                <CardDescription>
                  Our construction partners provide recycled concrete and support our mission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We collaborate with leading construction companies to source high-quality recycled concrete for our
                  artificial reefs. These partnerships create a sustainable waste management solution while supporting
                  marine ecosystem restoration. Our construction partners benefit from reduced waste disposal costs and
                  enhanced environmental credentials.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organizations" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Environmental Organization 1"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Organization Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Environmental Organization 2"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Organization Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Environmental Organization 3"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Organization Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Environmental Organization 4"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Organization Name</span>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Environmental Organizations</CardTitle>
                <CardDescription>
                  Environmental organizations help us identify priority areas and validate our impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work closely with environmental organizations to identify critical marine areas in need of
                  restoration. These partnerships ensure our efforts are directed where they can have the greatest
                  impact. Our environmental partners also help validate and communicate the ecological benefits of our
                  artificial reefs through independent monitoring and assessment.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Research Institution 1"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Institution Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Research Institution 2"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Institution Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Research Institution 3"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Institution Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Research Institution 4"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Institution Name</span>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Research Institutions</CardTitle>
                <CardDescription>
                  Academic and research partners help advance our technology and validate results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our partnerships with marine biology and engineering research institutions drive continuous innovation
                  in our reef designs and monitoring systems. These collaborations provide scientific validation of our
                  approach and help us optimize our technology for maximum ecological benefit. The data collected from
                  our smart reefs also contributes to broader marine science research.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="government" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center py-8">
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Government Entity 1"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Entity Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Government Entity 2"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Entity Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Government Entity 3"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Entity Name</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-background rounded-full p-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Government Entity 4"
                    width={100}
                    height={100}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-center font-medium">Entity Name</span>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Government Entities</CardTitle>
                <CardDescription>
                  Local and national government partners support deployment and regulatory compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We work with coastal municipalities, maritime authorities, and environmental agencies to ensure our
                  reef deployments comply with all regulations and align with broader marine conservation strategies.
                  These partnerships facilitate permitting processes and provide access to priority deployment areas.
                  Government support also enhances the credibility and visibility of our projects.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

