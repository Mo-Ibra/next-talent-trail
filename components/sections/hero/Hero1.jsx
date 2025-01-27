import {
  ArrowDownRight,
  ArrowBigUp,
  HandshakeIcon,
  MapPin,
  UploadCloud,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero1 = () => {
  return (
    <section className="py-12 grid justify-center items-center h-[100vh] relative md:overflow-hidden dark:bg-darkbackground">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-20 lg:mt-0">
            <Badge variant="outline">
              Find Your Dream Job
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Find Your <span className="text-orange-500">Dream</span> Job Today
            </h1>
            <p className="max-w-xl text-muted-foreground lg:text-xl">
              Discover thousands of job listings from top companies around the
              world. Search by keyword, category, or location, and kickstart
              your career now!
            </p>
            <form className="w-full my-4">
              <input
                type="text"
                placeholder="Search by keyword, title, or company..."
                className="w-full py-3 indent-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-500 font-bold dark:bg-darkgray dark:border-gray-800"
              />
            </form>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link href="/job-list/one">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 sm:w-auto">
                  Search Now
                </Button>
              </Link>
              <Link href="/job-categories">
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse By Categories
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content (Image Section) */}
          <div className="mx-auto relative my-4 z-20">
            <Image
              src="/images/hero/1.png"
              alt="placeholder hero"
              className="rounded-lg object-cover"
              width={980}
              height={980}
            />

            {/* Card */}
            <div className="absolute top-0 left-0 bg-white dark:bg-darkgray dark:border dark:border-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4 animate-bounce">
              <div className="bg-orange-500/10 rounded-lg">
                <ArrowBigUp className="size-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold max-w-40">
                  Find your great Job Today!
                </h3>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-white dark:bg-darkgray dark:border dark:border-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4">
              <div className="bg-orange-500/10 p-2 rounded-lg">
                <UploadCloud className="size-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold max-w-40">
                  Upload Your CV it take just seconds!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 rounded-full blur-3xl top-20 -left-20"></div>
        <HandshakeIcon className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 z-10" />
        <MapPin className="absolute w-96 h-96 text-orange-500/5 top-20 -left-20 z-10" />
      </div>
    </section>
  );
};

export default Hero1;
