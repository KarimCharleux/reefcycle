"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FailureMode {
    id: string
    component_process: string
    failure_mode: string
    severity: number
    failure_effect: string
    occurrence: number
    corrective_actions: string
    detection: number
    criticality: number
}

export function AmdecAnalysis() {
    const [failureModes, _] = useState<FailureMode[]>([
        {
            id: "1",
            component_process: "Recycled concrete tests",
            failure_mode: "Bad concrete quality",
            severity: 9,
            failure_effect: "Crumbling, breaking concrete",
            occurrence: 5,
            corrective_actions: "Through tests to validate quality before manufacturing, new subcontracting",
            detection: 2,
            criticality: 90,
        },
        {
            id: "2",
            component_process: "Legal restrictions on the installation of artificial reefs",
            failure_mode: "Inability to deploy reefs in certains areas",
            severity: 9,
            failure_effect: "Project slowdowned or aborted",
            occurrence: 2,
            corrective_actions: "Collaboration with environmental NGOs to identity authorized locations for reef installation",
            detection: 3,
            criticality: 54,
        },
        {
            id: "3",
            component_process: "Conception of reefs prototypes",
            failure_mode: "Errors in the structural and accoustic conception of reefs",
            severity: 9,
            failure_effect: "Animal species not attracted, coral non-adhesion, failure of vegetation regeneration",
            occurrence: 5,
            corrective_actions: "Tests in simulated environment and validation by an experienced scientific committee",
            detection: 5,
            criticality: 225,
        },
        {
            id: "4",
            component_process: "BTP Partnerships",
            failure_mode: "Lack of supply of recycled concrete",
            severity: 9,
            failure_effect: "Delay in reef production",
            occurrence: 6,
            corrective_actions: "Diversity partnerships and secure long-term contracts",
            detection: 2,
            criticality: 108,
        },
        {
            id: "5",
            component_process: "Financial partnerships and sponsorship",
            failure_mode: "Difficulty in finding contracts and attracting sponsors",
            severity: 9,
            failure_effect: "Lack of funds, project slowdown",
            occurrence: 6,
            corrective_actions: "Clarification of the business model and creation of attractive offers",
            detection: 3,
            criticality: 162,
        },
        {
            id: "6",
            component_process: "Industrialization of production and large-scale deployment",
            failure_mode: "Difficulty in increasing production or too slow installation",
            severity: 7,
            failure_effect: "Inability to meet increased demand",
            occurrence: 5,
            corrective_actions: "Automate processes meticulous logistics planning, and proactive management",
            detection: 5,
            criticality: 175,
        },
        {
            id: "7",
            component_process: "Sensors and transmitters installed on ReefCycle reefs",
            failure_mode: "Technical failure of the sensors",
            severity: 10,
            failure_effect: "Incorrect data or lack of monitoring",
            occurrence: 4,
            corrective_actions: "Maintenance performed by divers to repair or replace sensors/transmitters",
            detection: 5,
            criticality: 200,
        },
        {
            id: "8",
            component_process: "Monitoring the performance and impact of ReefCycle reefs",
            failure_mode: "Performance with no effects or negative impact on marine biodiversity",
            severity: 10,
            failure_effect: "Loss or brand credibility",
            occurrence: 1,
            corrective_actions: "Review the conception and testing phases: modification of reef parameters",
            detection: 6,
            criticality: 60,
        },
    ])

    return (
        <Card>
            <CardHeader>
                <CardTitle>AMDEC Analysis</CardTitle>
                <CardDescription>Failure Mode, Effects, and Criticality Analysis for ReefCycle components</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Component/Process
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Failure Mode
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Failure effect
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Severity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Occurrence
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Detectability
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Criticality
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Corrective actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {failureModes.map((failureMode) => (
                                <tr key={failureMode.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.component_process}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.failure_mode}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.failure_effect}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.severity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.occurrence}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.detection}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.criticality}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{failureMode.corrective_actions}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}