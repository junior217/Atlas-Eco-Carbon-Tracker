import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Energy</CardTitle>
          <CardDescription className="mt-2 flex items-center gap-2 text-3xl font-bold">
            14,000 MtCO2
            <Badge variant="secondary" className="rounded-md px-2 py-1 text-sm">
              +5.2%
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-muted-foreground">
              Activities:{" "}
              <span className="font-slate-400 text-xs">Emissions_Mtco2</span>
            </h1>
            <ul>
              <li className="flex justify-between text-sm">
                <span>Electricity & Heat Production</span>
                <span>9,200 </span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Manufacturing & Construction</span>
                <span>2,800 </span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Fugitive Emissions</span>
                <span>2,000 </span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Global Yearly Change <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">1.77%</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Transportation</CardTitle>
          <CardDescription className="mt-2 flex items-center gap-2 text-3xl font-bold">
            7200 MtCO2
            <Badge variant="secondary" className="rounded-md px-2 py-1 text-sm">
              +5.2%
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-muted-foreground">
              Activities:{" "}
              <span className="font-slate-400 text-xs">Emissions_Mtco2</span>
            </h1>
            <ul>
              <li className="flex justify-between text-sm">
                <span>Passenger Cars</span>
                <span>3400</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Heavy Trucks</span>
                <span>1200 </span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Light Commercial Vehicles</span>
                <span>700</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Aviation</span>
                <span>1100</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>600</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Rail</span>
                <span>100 </span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Global Yearly Change <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">3.77%</div>
        </CardFooter>
      </Card>
    </div>
  );
}
