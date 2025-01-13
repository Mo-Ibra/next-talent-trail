import { ArrowDownRight, HandshakeIcon, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  return (
    <section className="py-32 grid justify-center items-center h-[92vh] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Find Your <span className="text-orange-500">Dream</span> Job Today
            </h1>
            <p className="max-w-xl text-muted-foreground lg:text-xl">
              Discover thousands of job listings from top companies around the
              world. Search by keyword, category, or location and kickstart your
              career now!
            </p>
            <form className="w-full my-4">
              <input
                type="text"
                placeholder="Search by keyword, title, or company..."
                className="w-full py-3 indent-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-500 font-bold"
              />
            </form>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full bg-orange-500 sm:w-auto">
                Search Now
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Browse By Categories
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 rounded-full blur-3xl top-0 right-0"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 rounded-full blur-3xl -top-10 -left-20"></div>
        <HandshakeIcon className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 -z-10" />
        <MapPin className="absolute w-96 h-96 text-orange-500/5 -top-10 -left-20 -z-10" />
      </div>
    </section>
  );
};

export default Hero1;
