"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Play, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const popularSearches = [
  "Designer",
  "Developer",
  "Web",
  "iOS",
  "PHP Senior Engineer",
];

const Hero3 = () => {
  const [keywords, setKeywords] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", keywords);
  };

  return (
    <div className="relative min-h-[600px] h-[100vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero/4.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-darkbackground/60" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center"
          >
            <div className="max-w-xl">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Find a new job and
                <br />
                build career
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="text-lg text-white dark:text-gray-400 mb-8"
              >
                Find Jobs, Employment & Career Opportunities. Some of the
                companies we've helped recruit excellent applicants over the
                years.
              </motion.p>

              {/* Search Form */}
              <motion.form
                onSubmit={handleSearch}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <div className="flex">
                  <div className="relative flex-1">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search your Keywords"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="pl-10 bg-white dark:bg-darkgray h-12 rounded-r-none"
                    />
                  </div>
                  <Link href="/job-list/four">
                    <Button
                      type="submit"
                      className="h-12 px-8 bg-orange-600 hover:bg-orange-700 rounded-l-none"
                    >
                      Search
                    </Button>
                  </Link>
                </div>
              </motion.form>

              {/* Popular Searches */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="flex flex-wrap items-center gap-2 text-white dark:text-gray-400"
              >
                <span className="text-white/80">Popular Searches :</span>
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setKeywords(term)}
                    className="text-white dark:text-gray-400 hover:text-orange-300 transition-colors"
                  >
                    {term}
                    {index < popularSearches.length - 1 && (
                      <span className="ml-2">•</span>
                    )}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero3;