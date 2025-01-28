import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

import { companies } from "@/data/companies";
import Link from "next/link";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TopRecruiters() {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Top Recruiters
          </Badge>
          <h2 className="text-4xl font-bold">
            Discover your next career
            <br />
            move
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          {companies.map((company, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="relative w-12 h-12">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <Badge variant="outline" className=" text-orange-500">
                      {company.jobs} Jobs
                    </Badge>
                  </div>

                  <div>
                    <Link href="/company-profile">
                      <h3 className="font-semibold">{company.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {company.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <StarRating rating={company.rating} />
                    <span className="text-sm text-muted-foreground">
                      ({company.reviews})
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-orange-600 hover:bg-orange-700">
            Show More
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-40 -z-10 rounded-full blur-3xl bottom-2/4 right-2/4"></div>
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -bottom-10 -right-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 dark:bg-orange-500/10 opacity rounded-full bottom-10 -left-52 -z-10"></div>
      </div>
    </section>
  );
}

export default TopRecruiters;
