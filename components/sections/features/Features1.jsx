import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features } from "@/data/features";
import { Lamp } from "lucide-react";

const Features1 = () => {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Our Features
          </Badge>
          <h2 className="text-4xl font-bold">
            Features that help you find
            <br />
            your dream job.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <Card className="rounded-br-[80px] shadow-md" key={i}>
              <CardHeader className="pb-1">
                <div className="size-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 cursor-pointer duration-300 my-2">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">{feature.title}</h2>
                <p className="leading-snug text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
              <CardFooter className="justify-end pb-0 pr-0">
                <img
                  className="h-60 w-full rounded-tl-md object-cover object-top rounded-br-[80px]"
                  src={feature.imageUrl}
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Lamp className="absolute w-60 h-60 text-orange-500/20 opacity-40 -z-10 top-20 right-10" strokeWidth={3} />
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-40 -z-10 rounded-full blur-3xl bottom-20 -left-20"></div>
      </div>
    </section>
  );
};

export default Features1;
