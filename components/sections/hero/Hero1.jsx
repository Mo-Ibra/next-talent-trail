"use client";

import {
  ArrowDownRight,
  ArrowBigUp,
  HandshakeIcon,
  MapPin,
  UploadCloud,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 grid justify-center items-center h-[100vh] relative md:overflow-hidden dark:bg-darkbackground"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left mt-20 lg:mt-0"
          >
            <Badge variant="outline">
              Find Your Dream Job
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="my-6 text-pretty text-4xl font-bold lg:text-6xl"
            >
              Find Your <span className="text-orange-500">Dream</span> Job Today
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-xl text-muted-foreground lg:text-xl"
            >
              Search and apply for the latest jobs in IT, Marketing, Sales,
              Finance, Engineering, and more. Get ahead in your career today!
            </motion.p>
            <motion.form
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full my-4"
            >
              <input
                type="text"
                placeholder="Search by keyword, title, or company..."
                className="w-full py-3 indent-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-500 font-bold dark:bg-darkgray dark:border-gray-800"
              />
            </motion.form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              <Link href="/job-list/one">
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
            </motion.div>
          </motion.div>

          {/* Right Content (Image Section) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto relative my-4 z-20"
          >
            <Image
              src="/images/hero/1.png"
              alt="placeholder hero"
              className="rounded-lg object-cover"
              width={980}
              height={980}
            />

            {/* Card */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-0 left-0 bg-white dark:bg-darkgray dark:border dark:border-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4 animate-bounce"
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

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-0 right-0 bg-white dark:bg-darkgray dark:border dark:border-gray-800 rounded-lg shadow-lg p-6 flex items-center gap-4"
            >
              <div className="bg-orange-500/10 p-2 rounded-lg">
                <UploadCloud className="size-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold max-w-40">
                  Upload Your CV it takes just seconds!
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/20 opacity-20 rounded-full blur-3xl top-20 -left-20"></div>
        <HandshakeIcon className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 z-10" />
        <MapPin className="absolute w-96 h-96 text-orange-500/5 top-20 -left-20 z-10" />
      </div>
    </motion.section>
  );
};

export default Hero1;