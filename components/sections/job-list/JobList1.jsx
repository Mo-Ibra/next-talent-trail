"use client";

import { Badge } from "@/components/ui/badge";
import { ContentFulJobCard } from "@/components/common/job-cards";

import { jobs } from "@/data/jobs";
import { Pagination } from "@/components/common/pagination";
import { useState } from "react";

const JobList1 = () => {

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Latest Jobs
          </Badge>
          <h2 className="text-4xl font-bold">
            Get your job done in
            <br />
            a few clicks
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <ContentFulJobCard key={job.id} job={job} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      </div>
    </section>
  );
};

export default JobList1;