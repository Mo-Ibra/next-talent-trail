"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Share2Icon,
  TimerIcon,
  Table2Icon,
} from "lucide-react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const relatedJobs = [
  {
    company: "GitHub",
    logo: "/images/logos/1-1.png",
    title: "Remote Shopify Website Tester",
    salary: "$100K - $150K",
    location: "NYC",
    timeAgo: "4h",
  },
  {
    company: "GitHub",
    logo: "/images/logos/1-2.png",
    title: "Remote Senior Software Engineer",
    salary: "$100K - $150K",
    location: "NYC",
    timeAgo: "7h",
  },
  {
    company: "Facebook",
    logo: "/images/logos/1-3.png",
    title: "Remote Cyber Security Analyst US",
    salary: "$95K - $150K",
    location: "United States",
    timeAgo: "2d",
  },
];

function JobDetail2() {
  return (
    <div className="min-h-screen relative bg-orange-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/job-list/one"
          className="inline-flex items-center text-sm text-orange-600 hover:text-orange-800 ml-5 my-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Jobs
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div>
            <div className="lg:col-span-1 lg:top-20 lg:sticky">
              {/* Company Publisher */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="/images/logos/1-5.png"
                      alt="Medium Inc."
                    />
                  </Avatar>
                  <div>
                    <h2 className="font-semibold">Medium Inc.</h2>
                    <div className="text-sm text-gray-500">
                      Posted on 24 August, 2024
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Table2Icon className="h-4 w-4" />
                    <span>Fulltime</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>London, UK / Remote Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>$75K - $100K</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Share2Icon className="h-4 w-4" />
                    <span>3+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TimerIcon className="h-4 w-4" />
                    <span>5th Jan, 2024</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    size="lg"
                  >
                    Apply Now →
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Visit Website
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="text-center mb-6">
                  <h3 className="font-medium mb-2">Land your dream job</h3>
                  <p className="text-sm text-gray-500">
                    Get a weekly email with the latest startup jobs.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Your email" type="email" />
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Join Newsletter
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border">
              <h1 className="text-2xl font-bold mb-6">
                Engineering Manager Developer Experience
              </h1>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">The Role</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    In the world of AI, behavioural predictions are leading the
                    charge to better machine learning.
                  </p>
                  <p>
                    There is so much happening in the AI space. Advances in the
                    economic sectors have seen automated business practices
                    rapidly increasing economic value. While the realm of the
                    human sciences has used the power afforded by computational
                    capabilities to solve many human based dilemmas. Even the
                    art scene has adopted carefully selected ML applications to
                    usher in the technological movement.
                  </p>
                  <p>
                    As a Senior Client Engineer, you'll work alongside other
                    engineers, designers, and product managers to tackle
                    everything from huge company initiatives to modest but
                    important bug fixes, from start to finish. You'll also
                    collaborate with your product team on discovery, helping to
                    assess the direction and feasibility of product changes.
                    And, perhaps most importantly, you'll actively contribute to
                    the evolution of the culture and processes of a growing
                    engineering team.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About You</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    You love building great software. Your work could be
                    supporting new feature development, migrating existing
                    features, and creating other mobile and web solutions for
                    customers. You'll have a primary focus on frontend
                    development using JavaScript. Our client's tech stack is
                    JavaScript, primarily using React. A strong understanding of
                    JS core (ES2019+) is required, with some exposure in Java as
                    back-end technology. We use modern tools, which means you'll
                    have the opportunity to work with Webpack, Redux, Apollo,
                    Styled Components, and much more.
                  </p>
                  <p>
                    You love learning. Engineering is an ever-evolving world.
                    You enjoy playing with new tech and exploring areas that you
                    might not have experience with yet. You are self-driven,
                    self-learner willing to share knowledge and participate
                    actively in your community.
                  </p>
                  <p>
                    Having overlap with your team is critical when working in a
                    global remote team. Modus requires all team members to
                    overlap with EST morning hours daily. In addition, reliable
                    high speed internet is a must.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  Things You Might Do
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We are a fast-growing, and remote-first company, so you'll
                    likely get experience on many different projects across the
                    organization. That said, here are some things you'll
                    probably do:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Give back to the community via open source and blog posts
                    </li>
                    <li>
                      Travel and meet great people- as part of our remote-first
                      lifestyle, it's important that we come together as needed
                      to work together, meet each other in person and have fun
                      together. Please keep that in mind when you apply
                    </li>
                    <li>
                      Teach and be taught: Modus creates active teams that work
                      in internal and external projects together, giving
                      opportunities to stay relevant with the latest
                      technologies and learning from experts worldwide
                    </li>
                    <li>
                      Interact directly with internal and external clients to
                      represent Modus and its values
                    </li>
                  </ul>
                </div>
              </section>

              <div className="flex items-center justify-between pt-6 border-t">
                <div className="text-sm text-gray-500">Share job</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <FaTwitter className="h-4 w-4 text-orange-600" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <FaFacebook className="h-4 w-4 text-orange-600" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2Icon className="h-4 w-4 text-orange-600" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Jobs */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-6">Related Jobs</h2>
              <div className="space-y-6">
                {relatedJobs.map((job, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between pb-6 last:pb-0 last:mb-0 border-b last:border-0"
                  >
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={job.logo} alt={job.company} />
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{job.title}</h3>
                        <div className="text-sm text-gray-500">
                          {job.salary} • {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{job.timeAgo}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 -z-10 rounded-full blur-3xl -top-10 -right-20"></div>
        <div className="absolute w-96 h-96 bg-orange-50 opacity rounded-full bottom-10 -right-52 -z-10"></div>
      </div>
    </div>
  );
}

export default JobDetail2;
