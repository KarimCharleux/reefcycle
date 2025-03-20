"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { GanttChart } from "@/components/business/gantt-chart"
import { PertChart } from "@/components/business/pert-chart"
import { SwotAnalysis } from "@/components/business/swot-analysis"
import { SmartGoals } from "@/components/business/smart-goals"
import { AmdecAnalysis } from "@/components/business/amdec-analysis";
import { BudgetEstimate } from "@/components/business/budget-estimate";

export default function BusinessPage() {
    const [activeTab, setActiveTab] = useState("gantt")

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center">
                    <MainNav />
                </div>
            </header>
            <main className="flex-1">
                <section className="container py-8 md:py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Button variant="ghost" size="icon" asChild>
                                    <Link href="/">
                                        <ArrowLeft className="h-4 w-4" />
                                        <span className="sr-only">Back to home</span>
                                    </Link>
                                </Button>
                                <h1 className="text-3xl font-bold tracking-tight">Business Planning</h1>
                            </div>
                            <p className="text-muted-foreground">
                                Strategic planning and analysis tools for ReefCycle's business operations
                            </p>
                        </div>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                            <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
                            <TabsTrigger value="pert">PERT Chart</TabsTrigger>
                            <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
                            <TabsTrigger value="smart">SMART Goals</TabsTrigger>
                            <TabsTrigger value="amdec">AMDEC Analysis</TabsTrigger>
                            <TabsTrigger value="budget">Budget Estimate</TabsTrigger>
                        </TabsList>
                        <TabsContent value="gantt" className="space-y-4">
                            <GanttChart />
                        </TabsContent>
                        <TabsContent value="pert" className="space-y-4">
                            <PertChart />
                        </TabsContent>
                        <TabsContent value="swot" className="space-y-4">
                            <SwotAnalysis />
                        </TabsContent>
                        <TabsContent value="smart" className="space-y-4">
                            <SmartGoals />
                        </TabsContent>
                        <TabsContent value="amdec" className="space-y-4">
                            <AmdecAnalysis />
                        </TabsContent>
                        <TabsContent value="budget" className="space-y-4">
                            <BudgetEstimate />
                        </TabsContent>
                    </Tabs>
                </section>
            </main>
            <Footer />
        </div>
    )
}