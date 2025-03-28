"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LucideArrowUp, Clock, Check, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const avatars = [
  "/images/avatars/1.png",
  "/images/avatars/2.png",
  "/images/avatars/3.png",
  "/images/avatars/1.png",
  "/images/avatars/2.png",
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ContentFulJobCard = ({ job }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Card key={job.id} className="overflow-hidden dark:bg-darkgray">
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
                ${job.salary}/month
              </Badge>
            </div>

            {/* Job Info */}
            <div>
              <Link href="/job-detail/one">
                <h3 className="font-semibold mb-2">{job.title}</h3>
              </Link>
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
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-xs border-2 border-white z-40">
                  +{job.applicants}
                </div>
              </div>
              <Link href="/job-apply">
                <Button
                  variant="outline"
                  className="dark:text-white hover:bg-orange-600"
                >
                  Apply Now
                  <LucideArrowUp className="ml-2 size-4" />
                </Button>
              </Link>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-orange-50 text-orange-500 hover:bg-orange-100 cursor-pointer dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const BasicJobCard = ({ job }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card className="bg-white dark:bg-darkgray relative">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Job Type and Time */}
            <div className="flex justify-between items-center text-sm">
              <Badge
                variant="secondary"
                className="bg-orange-50 text-orange-500 dark:bg-orange-500 dark:text-white"
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
                <Link href="/company-profile">
                  <h3 className="font-medium">{job.company.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">
                  {job.company.location}
                </p>
              </div>
            </div>

            <hr className="dark:border-gray-600" />

            {/* Job Title */}
            <div>
              <Link href="/job-detail/one">
                <h4 className="text-lg font-semibold">{job.title}</h4>
              </Link>
              <p className="text-orange-500 font-medium">${job.salary}/Month</p>
            </div>
          </div>
        </CardContent>

        {/* Action Button */}
        <Button
          size="icon"
          className="absolute -bottom-5 right-2/4 rounded-full w-10 h-10 bg-orange-50 hover:bg-orange-100 dark:bg-orange-500 dark:hover:bg-orange-600"
        >
          <Check className="text-orange-500 font-bold dark:text-white" />
        </Button>
      </Card>
    </motion.div>
  );
};

export const BasicJobCardWithRating = ({ job }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card key={job.id} className="p-6 hover:shadow-lg duration-200">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="h-12 w-12 overflow-hidden">
              <img
                src={job.company.logo || "/placeholder.svg"}
                alt={`${job.company.name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{job.company.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {job.postedAt}
                  </span>
                </div>
                <Link href="/job-detail/one">
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Total Openings: {job.applicants}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {job.verified && (
                  <Badge
                    variant="secondary"
                    className="bg-orange-50 text-orange-600"
                  >
                    Verified
                  </Badge>
                )}
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(job.rating)
                          ? "fill-orange-400 text-orange-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full shadow-sm border"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-orange-600 justify-end">
                  <span className="text-lg font-semibold">${job.salary}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span>{job.company.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
