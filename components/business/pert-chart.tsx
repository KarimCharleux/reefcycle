"use client"

import "reactflow/dist/style.css"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import * as React from "react";


export function PertChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>PERT Chart</CardTitle>
                <CardDescription>
                    Program Evaluation and Review Technique for analyzing and visualizing task sequences
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src="/Diagramme_Pert.png" alt="Diagramme Pert" width={1000} height={400} className="object-contain" />
            </CardContent>
        </Card>
    )
}

