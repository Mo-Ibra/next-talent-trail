import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Lamp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Quality",
    description: "Many desktop publishing now use and a search for job",
    icon: <ZoomIn className="size-6 text-orange-500" strokeWidth={3} />,
  },
  {
    title: "Experience",
    description: "Many desktop publishing now use and a search for job",
    icon: (
      <BarChartHorizontal className="size-6 text-orange-500" strokeWidth={3} />
    ),
  },
  {
    title: "Support",
    description: "Many desktop publishing now use and a search for job",
    icon: <CircleHelp className="size-6 text-orange-500" strokeWidth={3} />,
  },
  {
    title: "Innovation",
    description: "Many desktop publishing now use and a search for job",
    icon: <WandSparkles className="size-6 text-orange-500" strokeWidth={3} />,
  },
  {
    title: "Results",
    description: "Many desktop publishing now use and a search for job",
    icon: <Layers className="size-6 text-orange-500" strokeWidth={3} />,
  },
  {
    title: "Efficiency",
    description: "Many desktop publishing now use and a search for job",
    icon: (
      <BatteryCharging className="size-6 text-orange-500" strokeWidth={3} />
    ),
  },
];

const Features2 = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-left space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Why US
          </Badge>
          <h2 className="text-4xl font-bold">
            Because we have the best
            <br />
            features.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="flex flex-col py-6 shadow-md text-center border rounded-lg"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-orange-100 mx-auto my-2 hover:bg-orange-200 duration-300 cursor-pointer">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold my-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground max-w-60 mx-auto">
                {reason.description}
              </p>
              <Button variant="outline" className="mt-4 mx-auto">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -bottom-10 -right-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 opacity rounded-full bottom-10 -left-52 -z-10"></div>
      </div>
    </section>
  );
};

export default Features2;
