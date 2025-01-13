import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const jobs = [
  {
    company: {
      name: "Pinterest",
      logo: "/images/logos/1-1.png",
      location: "Washington U.S.A.",
    },
    title: "Backend Developer",
    salary: 130,
    postedTime: "1 Day ago",
  },
  {
    company: {
      name: "Yahoo!",
      logo: "/images/logos/1-2.png",
      location: "Washington U.S.A.",
    },
    title: "Backend Developer",
    salary: 130,
    postedTime: "1 Day ago",
  },
  {
    company: {
      name: "google",
      logo: "/images/logos/1-3.png",
      location: "Washington U.S.A.",
    },
    title: "Backend Developer",
    salary: 130,
    postedTime: "1 Day ago",
  },
  {
    company: {
      name: "Amazon",
      logo: "/images/logos/1-4.png",
      location: "Washington U.S.A.",
    },
    title: "Senior Backend Developer",
    salary: 4000,
    postedTime: "3 Day ago",
  },
  {
    company: {
      name: "Meta",
      logo: "/images/logos/1-5.png",
      location: "Washington U.S.A.",
    },
    title: "Product Designer",
    salary: 6000,
    postedTime: "12 Day ago",
  },
  {
    company: {
      name: "google",
      logo: "/images/logos/1-6.png",
      location: "Washington U.S.A.",
    },
    title: "Sales Manager",
    salary: 130,
    postedTime: "5 Day ago",
  },
];

function FeaturedJobs() {
  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Job Categories
          </Badge>
          <h2 className="text-4xl font-bold">
            Connect with the right
            <br />
            candidates faster.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <Card key={index} className="bg-white relative">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Job Type and Time */}
                  <div className="flex justify-between items-center text-sm">
                    <Badge
                      variant="secondary"
                      className="bg-orange-50 text-orange-500"
                    >
                      Full Time
                    </Badge>
                    <Badge variant="outline" className="text-muted-foreground">
                      {job.postedTime}
                    </Badge>
                  </div>

                  {/* Company Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src={job.company.logo}
                        alt={job.company.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{job.company.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company.location}
                      </p>
                    </div>
                  </div>

                  <hr />

                  {/* Job Title */}
                  <div>
                    <h4 className="text-lg font-semibold">{job.title}</h4>
                    <p className="text-orange-500 font-medium">
                      ${job.salary}/Month
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Action Button */}
              <Button
                size="icon"
                className="absolute -bottom-5 right-2/4 rounded-full w-10 h-10 bg-orange-50 hover:bg-orange-100"
              >
                <Check className="text-orange-500 font-bold" />
              </Button>
            </Card>
          ))}
        </div>

        <Button className=" bg-orange-600 hover:bg-orange-700 mt-12 mx-auto flex justify-center">
          Show More
        </Button>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-40 -z-10 rounded-full blur-3xl -top-10 -left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 opacity rounded-full bottom-10 -right-52 -z-10"></div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
