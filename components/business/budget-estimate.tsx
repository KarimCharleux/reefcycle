"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BudgetEstimate() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Budget Estimate</CardTitle>
                <CardDescription>
                    Calculate cost estimates for ReefCycle units based on dimensions and materials
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Card
                            className="overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30"
                        >
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-xl">Standard ReefCycle</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                        <tr>
                                            <th className="text-left font-medium p-2 border">Parameter</th>
                                            <th className="text-center font-medium p-2 border">Calculation</th>
                                            <th className="text-right font-medium p-2 border">Result</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="p-2 border font-semibold">ReefCycle Size</td>
                                            <td className="p-2 border text-center">
                                                5 x 2 x 3
                                            </td>
                                            <td className="p-2 border text-right">30 m³</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border font-semibold">ReefCycle Weight</td>
                                            <td className="p-2 border text-center">
                                                Density of concrete: 2400
                                                <br />
                                                30 x 2400 / 1000
                                            </td>
                                            <td className="p-2 border text-right">72 tons</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border font-semibold">Costs*</td>
                                            <td className="p-2 border text-center">200€ / m³</td>
                                            <td className="p-2 border text-right">6000€</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border font-semibold">Final ReefCycle Price*</td>
                                            <td className="p-2 border text-center"></td>
                                            <td className="p-2 border text-right font-bold text-2xl">12000€</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    *Include production, transport and immersion
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

