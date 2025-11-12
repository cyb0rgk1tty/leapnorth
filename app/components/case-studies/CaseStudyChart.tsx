"use client";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/app/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface CaseStudyChartProps {
  metrics: any[];
}

export function CaseStudyChart({ metrics }: CaseStudyChartProps) {
  if (!metrics || metrics.length === 0) {
    return null;
  }

  // Get the data keys dynamically
  const dataKeys = Object.keys(metrics[0]).filter(key => key !== 'name');

  return (
    <ChartContainer
      className="h-[400px] w-full"
      config={{
        primary: {
          label: dataKeys[0] || "Value",
          color: "hsl(var(--primary))",
        },
        secondary: {
          label: dataKeys[1] || "",
          color: "hsl(var(--primary) / 0.6)",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={metrics}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey={dataKeys[0]}
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
          {dataKeys[1] && (
            <Bar
              dataKey={dataKeys[1]}
              fill="hsl(var(--primary) / 0.6)"
              radius={[4, 4, 0, 0]}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
