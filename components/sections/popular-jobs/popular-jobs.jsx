import { Badge } from "@/components/ui/badge";
import { ContentFulJobCard } from "@/components/common/job-cards";


function PopularJobs({ jobs }) {

  return (
    <section className="py-16 px-4 md:px-6 bg-orange-50 dark:bg-darkbackground">
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
            <ContentFulJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;
