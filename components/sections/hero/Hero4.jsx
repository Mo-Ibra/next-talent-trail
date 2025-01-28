"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowBigUp, DamIcon, UploadCloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 grid justify-center items-center h-[100vh] relative md:overflow-hidden dark:bg-darkbackground"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8 } },
          }}
          className="grid items-center gap-8 lg:grid-cols-2"
        >
          {/* Left Content (Image Section) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto relative my-4 z-20 lg:block hidden"
          >
            <Image
              src="/images/hero/9.png"
              alt="placeholder hero"
              className="rounded-lg object-cover"
              width={2000}
              height={1300}
            />

            {/* Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-20 left-0 bg-white dark:bg-darkgray dark:border dark:border-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4"
            >
              <div className="bg-orange-500/10 rounded-lg">
                <ArrowBigUp className="size-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold max-w-40">
                  Find your great Job Today!
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left xl:mb-40"
          >
            <Badge variant="outline">
              Find Your Dream Job
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
            >
              Find Your <span className="text-orange-500">Dream</span> Job Today
            </motion.h1>
            <p className="max-w-xl text-muted-foreground lg:text-xl">
              Discover thousands of job listings from top companies around the
              world. Search by keyword, category, or location, and kickstart your
              career now!
            </p>
            <form className="w-full my-4">
              <input
                type="text"
                placeholder="Search by keyword, title, or company..."
                className="w-full py-3 indent-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-500 font-bold dark:bg-darkgray dark:border-gray-800"
              />
            </form>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link href="/job-list/seven">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 sm:w-auto">
                  Search Now
                </Button>
              </Link>
              <Link href="/job-categories">
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse By Categories
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute w-96 h-96 bg-orange-500/20 opacity-20 rounded-full blur-3xl top-20 -left-20"
        />
        <UploadCloud
          className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 z-10"
        />
        <DamIcon
          className="absolute w-96 h-96 text-orange-500/5 top-20 -left-20 z-10"
        />
      </div>
    </motion.section>
  );
};

export default Hero4;