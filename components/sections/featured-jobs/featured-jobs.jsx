import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { jobs } from "@/data/jobs";
import { BasicJobCard } from "@/components/common/job-cards";

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
          {jobs.map((job) => (
            <BasicJobCard job={job} key={job.id} />
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
