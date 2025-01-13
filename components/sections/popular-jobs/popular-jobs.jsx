import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowDownRight, Clock, LucideArrowUp } from "lucide-react";

const jobs = [
  {
    id: 1,
    company: {
      name: "Facebook",
      logo: "/images/logos/1-1.png",
      website: "Facebook.com",
      location: "New York, US",
    },
    title: "Graphic Designer fulltime",
    salary: 500,
    description:
      "A graphic designer is a professional who designs the visual content of a website or application.",
    applicants: 14,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "4 Minutes ago",
  },
  {
    id: 2,
    company: {
      name: "McDonald's",
      logo: "/images/logos/1-2.png",
      website: "Mackdonalds.com",
      location: "New York, US",
    },
    title: "Web Developer",
    salary: 250,
    description:
      "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World.",
    applicants: 56,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "30 Minutes ago",
  },
  {
    id: 3,
    company: {
      name: "Coca Cola",
      logo: "/images/logos/1-3.png",
      website: "Cocacola.com",
      location: "New York, US",
    },
    title: "Delivery Boy",
    salary: 250,
    description:
      "A delivery boy is a person who carries goods from one place to another.",
    applicants: 200,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "2 Hours ago",
  },
  {
    id: 4,
    company: {
      name: "Fexol",
      logo: "/images/logos/1-4.png",
      website: "Fexol.com",
      location: "New York, US",
    },
    title: "Ceo",
    salary: 150,
    description:
      "A CEO (Chief Executive Officer) is the top executive of a company.",
    applicants: 14,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "7 Hours ago",
  },
  {
    id: 5,
    company: {
      name: "Alphaletter",
      logo: "/images/logos/1-5.png",
      website: "Alphaletter.com",
      location: "New York, US",
    },
    title: "Product Designer",
    salary: 299,
    description:
      "A product designer is a professional who designs the visual content of a website or application.",
    applicants: 200,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "12 Hours ago",
  },
  {
    id: 6,
    company: {
      name: "Airbnb",
      logo: "/images/logos/1-6.png",
      website: "Airbnb.com",
      location: "New York, US",
    },
    title: "Manager",
    salary: 500,
    description:
      "A manager is a professional who designs the visual content of a website or application.",
    applicants: 14,
    skills: ["AdobeXd", "Figma", "Photoshop", "Corel"],
    postedTime: "17 Hours ago",
  },
];

const avatars = [
  "/images/avatars/1.png",
  "/images/avatars/2.png",
  "/images/avatars/3.png",
  "/images/avatars/1.png",
  "/images/avatars/2.png",
];

function PopularJobs() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Job of the day
          </Badge>
          <h2 className="text-4xl font-bold">
            Connect with the right
            <br />
            candidates faster.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <Image
                        src={job.company.logo}
                        alt={job.company.name}
                        width={54}
                        height={53}
                        className="rounded-lg"
                      />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {job.company.location}
                        </div>
                        <a
                          href={`https://${job.company.website}`}
                          className="text-muted-foreground"
                        >
                          {job.company.website}
                        </a>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-muted-foreground">
                      ${job.salary}/hour
                    </Badge>
                  </div>

                  {/* Job Info */}
                  <div>
                    <h3 className="font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant="secondary">Fulltime</Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.postedTime}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {job.description}
                    </p>
                  </div>

                  {/* Applicants */}
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2 items-center">
                      {avatars.map((avatar, i) => (
                        <Avatar key={i} className="border -ml-2 w-8 h-8">
                          <AvatarImage src={avatar} />
                        </Avatar>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-xs border-2 border-white z-50">
                        +{job.applicants}
                      </div>
                    </div>
                    <Button variant="outline">
                      Apply Job
                      <LucideArrowUp className="ml-2 size-4" />
                    </Button>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-orange-50 text-orange-500 hover:bg-orange-100 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;
