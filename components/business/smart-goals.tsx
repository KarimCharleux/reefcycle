"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SmartGoal {
    id: string
    title: string
    specific: string
    measurable: string
    achievable: string
    relevant: string
    timeBound: string
}

export function SmartGoals() {
    const [goals, _] = useState<SmartGoal[]>([
        {
            id: "1",
            title: "Deploy 3 artificial reefs in degraded marine areas within 1 year after the launch.",
            specific: " Deploy ReefCycle artificial reefs in degraded marine areas to promote the recolonization of marine species and improve local biodiversity.",
            measurable: "Increase the diversity of marine species observed on the implanted reefs by at least 30% within one year, measuring the presence of animal and plant life using sensors.",
            achievable: "Work with marine biology experts, monitor performance with sensors, and adjust the reefs based on the results. Collaborate with local and scientific organizations to maximize ecological effectiveness.",
            relevant: "Artificial reefs have already proven effective in several regions worldwide. Sensor monitoring will ensure concrete results. Additionally, emitters will help enhance plant growth and attract species.",
            timeBound: "The objective is to be achieved within one year after the reef installation, with data monitoring every six months in the first year and then annually to track biodiversity evolution.",
        },
        {
            id: "2",
            title: "Recycle 100 tons of construction concrete into marine structures by the end of the first year of operation.",
            specific: "Collect and recycle at least 100 tons of concrete waste from the construction industry to manufacture ReefCycle artificial reefs.",
            measurable: "Track the exact amount of recycled concrete through monthly reports and agreements with partner construction companies.",
            achievable: "Rely on strategic partnerships with construction companies seeking sustainable waste management solutions. Optimize the logistics of concrete collection and processing.",
            relevant: "The construction sector generates 230 million tons of waste per year in France, ensuring sufficient material availability to meet this goal.",
            timeBound: "Achieve 100 tons of recycled concrete by the end of the first year of operations, with monthly monitoring of collected and processed quantities."
        },
        {
            id: "3",
            title: "Establish at least 5 partnerships with construction companies for the supply of recycled concrete within 1 year.",
            specific: " Establish official collaborations with at least five construction companies to collect their unused concrete and transform it into artificial reefs.",
            measurable: "Track the number of signed partnership agreements and the amount of concrete supplied by these companies.",
            achievable: "Target construction companies that are environmentally conscious and offer them an economic and logistical advantage by outsourcing their waste management.",
            relevant: "Given that the construction sector in France generates 230 million tons of waste annually, securing five partners within a year is feasible with a targeted outreach strategy.",
            timeBound: "Achieve this goal within the first year following the launch of ReefCycle, with progress reviews every three months to adjust the strategy if needed."
        },
        {
            id: "4",
            title: "Launch a sponsorship program allowing 100 companies to finance reef plots within 3 years.",
            specific: "Establish a sponsorship program where companies can fund sections of artificial reefs and monitor their progress through sensors.",
            measurable: "Secure 100 sponsors committed to the program within three years.",
            achievable: "Develop a targeted marketing and communication strategy to raise awareness among the public and businesses, highlighting the positive impact on marine biodiversity.",
            relevant: "With a gradual scaling approach, reaching 100 sponsors in three years is attainable by leveraging awareness campaigns, partnerships with NGOs, and businesses involved in corporate social responsibility (CSR).",
            timeBound: "Goal to be achieved within three years, with intermediate milestones:\nYear 1: 10 sponsors\nYear 2: 40 sponsors\nYear 3: 100 sponsors"
        }
    ])

    const [expandedGoal, setExpandedGoal] = useState<string | null>(null)


    const toggleExpand = (id: string) => {
        setExpandedGoal(expandedGoal === id ? null : id)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>SMART Goals</CardTitle>
                <CardDescription>
                    Set Specific, Measurable, Achievable, Relevant, and Time-bound goals for ReefCycle
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="space-y-4">
                        {goals.map((goal) => (
                            <Card key={goal.id} className="overflow-hidden">
                                <div className="border-b">
                                    <div className="flex items-center justify-between p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="font-medium">{goal.title}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="sm" onClick={() => toggleExpand(goal.id)}>
                                                {expandedGoal === goal.id ? "Collapse" : "Expand"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {expandedGoal === goal.id && (
                                    <CardContent className="p-4 pt-6">
                                        <div className="grid gap-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="text-sm font-medium mb-1 flex items-center">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                              S
                            </span>
                                                        Specific
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">{goal.specific}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium mb-1 flex items-center">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                              M
                            </span>
                                                        Measurable
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">{goal.measurable}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="text-sm font-medium mb-1 flex items-center">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                              A
                            </span>
                                                        Achievable
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">{goal.achievable}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium mb-1 flex items-center">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                              R
                            </span>
                                                        Relevant
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">{goal.relevant}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium mb-1 flex items-center">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                            T
                          </span>
                                                    Time-bound
                                                </h4>
                                                <p className="text-sm text-muted-foreground">{goal.timeBound}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}