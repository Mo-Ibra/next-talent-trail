"use client";

import JobSidebar from "@/components/common/job-sidebar";

import { jobs } from "@/data/jobs";
import { Pagination } from "@/components/common/pagination";
import { useState } from "react";
import { BasicJobCardWithRating} from "@/components/common/job-cards";

function JobListSidebar3() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
          
          {/* Sidebar */}
          <JobSidebar />

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <BasicJobCardWithRating key={job.id} job={job} />
            ))}

            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListSidebar3;
