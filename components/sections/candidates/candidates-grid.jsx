"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import { Pagination } from "@/components/common/pagination";
import { useState } from "react";

function CandidatesGrid({ candidates, withPagination = false }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Our Candidates
          </Badge>
          <h2 className="text-4xl font-bold">
            You can find our best
            <br />
            candidates here.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="relative group">
              <CardContent className="p-6">
                <div className="relative flex justify-center mb-4">
                  <Image
                    src={candidate.image || "/placeholder.svg"}
                    alt={candidate.name}
                    width={640}
                    height={400}
                    className="rounded-lg cursor-pointer hover:scale-105 duration-300"
                  />
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg">{candidate.name}</h3>
                  <p className="text-muted-foreground">{candidate.subtitle}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {candidate.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-orange-50 text-orange-600 hover:bg-orange-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Salary:</p>
                    <p className="font-medium">{candidate.salary}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Experience:</p>
                    <p className="font-medium">{candidate.experience}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                    Profile
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {withPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
            className="mt-8"
          />
        )}
      </div>
    </section>
  );
}

export default CandidatesGrid;
