"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SwotItem {
    id: string
    text: string
    type: "strength" | "weakness" | "opportunity" | "threat"
}

export function SwotAnalysis() {
    const [swotItems, _] = useState<SwotItem[]>([
        { id: "s1", text: "Circular model", type: "strength" },
        { id: "s2", text: "Diversified funding", type: "strength" },
        { id: "s3", text: "Positive environmental impact", type: "strength" },
        { id: "s4", text: "Awareness and engagement", type: "strength" },

        { id: "w1", text: "Dependence on construction partners", type: "weakness" },
        { id: "w2", text: "Reef development time", type: "weakness" },
        { id: "w3", text: "Data collection waiting period", type: "weakness" },

        { id: "o1", text: "Growth of the circular and sustainable economy market", type: "opportunity" },
        { id: "o2", text: "Development of marine restoration solutions", type: "opportunity" },
        { id: "o3", text: "Collaboration with NGOs and scientific research", type: "opportunity" },
        { id: "o4", text: "Digital valorization", type: "opportunity" },

        { id: "t1", text: "Regulations and environmental constraints", type: "threat" },
        { id: "t2", text: "Significant initial investment", type: "threat" },
        { id: "t3", text: "Competition", type: "threat" },
    ])

    const getItemsByType = (type: "strength" | "weakness" | "opportunity" | "threat") => {
        return swotItems.filter((item) => item.type === type)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>SWOT Analysis</CardTitle>
                <CardDescription>Analyze ReefCycle's Strengths, Weaknesses, Opportunities, and Threats</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-green-700 dark:text-green-400">Strengths</CardTitle>
                                <CardDescription>Internal positive attributes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {getItemsByType("strength").map((item) => (
                                        <li key={item.id} className="flex justify-between items-start gap-2 group">
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-red-500/50 bg-red-50/50 dark:bg-red-950/20">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-red-700 dark:text-red-400">Weaknesses</CardTitle>
                                <CardDescription>Internal negative attributes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {getItemsByType("weakness").map((item) => (
                                        <li key={item.id} className="flex justify-between items-start gap-2 group">
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-blue-700 dark:text-blue-400">Opportunities</CardTitle>
                                <CardDescription>External factors that may be beneficial</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {getItemsByType("opportunity").map((item) => (
                                        <li key={item.id} className="flex justify-between items-start gap-2 group">
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-amber-700 dark:text-amber-400">Threats</CardTitle>
                                <CardDescription>External factors that may be harmful</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {getItemsByType("threat").map((item) => (
                                        <li key={item.id} className="flex justify-between items-start gap-2 group">
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}