import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LucideArrowUp, Clock, Check } from "lucide-react";

const avatars = [
  "/images/avatars/1.png",
  "/images/avatars/2.png",
  "/images/avatars/3.png",
  "/images/avatars/1.png",
  "/images/avatars/2.png",
];

export const ContentFulJobCard = ({ job }) => {
  return (
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
            <p className="text-muted-foreground text-sm">{job.description}</p>
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
              Apply Now
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
  );
};

export const BasicJobCard = ({ job }) => {
  return (
    <Card className="bg-white relative">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Job Type and Time */}
          <div className="flex justify-between items-center text-sm">
            <Badge variant="secondary" className="bg-orange-50 text-orange-500">
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
            <p className="text-orange-500 font-medium">${job.salary}/Month</p>
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
  );
};
