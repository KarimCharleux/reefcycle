"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

interface Task {
    id: string
    name: string
    startDate: Date
    endDate: Date
    dependencies: string[]
}

export function GanttChart() {
    const [tasks, _] = useState<Task[]>([
        {
            id: "1",
            name: "Technical validation of materials and reef structure",
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 8, 1),
            dependencies: [],
        },
        {
            id: "2",
            name: "Market analysis and identification of potential clients",
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 8, 1),
            dependencies: [],
        },
        {
            id: "3",
            name: "Seeking funding and partnerships",
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2026, 5, 1),
            dependencies: [],
        },
        {
            id: "4",
            name: "Design and manufacturing of the first reef prototype",
            startDate: new Date(2025, 8, 1),
            endDate: new Date(2026, 3, 1),
            dependencies: ["1", "2"],
        },
        {
            id: "5",
            name: "Immersion and performance monitoring",
            startDate: new Date(2026, 0, 1),
            endDate: new Date(2026, 6, 1),
            dependencies: ["1", "2"],
        },
        {
            id: "6",
            name: "Ecological assessment and measurement of biodiversity impact",
            startDate: new Date(2026, 2, 15),
            endDate: new Date(2026, 8, 15),
            dependencies: ["1", "2"],
        },
        {
            id: "7",
            name: "Large-scale production and reef deployment",
            startDate: new Date(2026, 5, 1),
            endDate: new Date(2026, 11, 1),
            dependencies: ["3"],
        },
        {
            id: "8",
            name: "Integration into marine policies",
            startDate: new Date(2026, 5, 1),
            endDate: new Date(2026, 11, 1),
            dependencies: ["3"],
        },
        {
            id: "9",
            name: "Commercial expansion and international develpment",
            startDate: new Date(2026, 5, 1),
            endDate: new Date(2026, 11, 1),
            dependencies: ["3"],
        },
    ])

    // Calculate the total duration in days from the earliest start date to the latest end date
    const earliestDate = new Date(Math.min(...tasks.map((task) => task.startDate.getTime())))
    const latestDate = new Date(Math.max(...tasks.map((task) => task.endDate.getTime())))
    const totalDays = Math.ceil((latestDate.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24))

    // Calculate the position and width of each task bar
    const getTaskBarStyle = (task: Task) => {
        const start = Math.ceil((task.startDate.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24))
        const duration = Math.ceil((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24))
        const left = (start / totalDays) * 100
        const width = (duration / totalDays) * 100

        return {
            left: `${left}%`,
            width: `${width}%`,
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Gantt Chart</CardTitle>
                <CardDescription>
                    Visualize project timeline and task dependencies for ReefCycle's development phases
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-[250px_1fr] border-b">
                            <div className="p-3 font-medium border-r">Task</div>
                            <div className="p-3 font-medium">Timeline</div>
                        </div>
                        {tasks.map((task) => (
                            <div key={task.id} className="grid grid-cols-[250px_1fr] border-b last:border-b-0">
                                <div className="p-3 border-r flex justify-between items-center">
                                    <div>
                                        <div className="font-medium">{task.name}</div>
                                        <div className="text-xs text-muted-foreground">
                                            {format(task.startDate, "MMM d")} - {format(task.endDate, "MMM d, yyyy")}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 relative h-16">
                                    <div
                                        className="absolute h-8 rounded-md bg-primary border border-primary flex items-center px-2"
                                        style={getTaskBarStyle(task)}
                                    >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

