"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

const popularSearches = [
  "Designer",
  "Developer",
  "Web",
  "iOS",
  "PHP Senior Engineer",
];

const Hero2 = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", { keywords, location });
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center h-[100vh]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero/2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-darkbackground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          You can find the
          <br />
          Best Candidates here
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search your Keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="pl-10 bg-white dark:bg-darkbackground h-12"
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-20" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="pl-10 bg-white dark:bg-darkbackground h-12">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Link href="/job-list/one">
              <Button
                type="submit"
                className="h-12 px-8 bg-orange-600 hover:bg-orange-700"
              >
                Search
              </Button>
            </Link>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-white">
          <span className="text-white/80">Popular Searches :</span>
          {popularSearches.map((term, index) => (
            <button
              key={index}
              onClick={() => setKeywords(term)}
              className="text-white hover:text-orange-300 transition-colors"
            >
              {term}
              {index < popularSearches.length - 1 && (
                <span className="ml-2">•</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
