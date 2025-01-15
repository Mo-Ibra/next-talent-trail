"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {  Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const jobTypes = [
  { label: "Full Time", value: "full-time", count: 3 },
  { label: "Part Time", value: "part-time", count: 7 },
  { label: "Freelancing", value: "freelancing", count: 4 },
  { label: "Fixed Price", value: "fixed-price", count: 6 },
  { label: "Remote", value: "remote", count: 7 },
  { label: "Hourly Basis", value: "hourly", count: 44 },
];

const JobSidebar = () => {

  const [selectedJobTypes, setSelectedJobTypes] = useState(["full-time"]);

  return (
    <div className="space-y-6 p-6 hidden lg:block sticky top-4 self-start shrink-0 border">

      {/* Search */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Search Company</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search" />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Categories</h2>
        <Select defaultValue="web-designer">
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-designer">Web Designer</SelectItem>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Location</h2>
        <Select defaultValue="new-york">
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="london">London</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Types */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Job Types</h2>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type.value} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={type.value}
                  checked={selectedJobTypes.includes(type.value)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedJobTypes([...selectedJobTypes, type.value]);
                    } else {
                      setSelectedJobTypes(
                        selectedJobTypes.filter((t) => t !== type.value)
                      );
                    }
                  }}
                />
                <label
                  htmlFor={type.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {type.label}
                </label>
              </div>
              <Badge
                variant="secondary"
                className="bg-orange-50 text-orange-600"
              >
                {type.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Salary</h2>
        <RadioGroup defaultValue="10k-15k">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10k-15k" id="10k-15k" />
            <label htmlFor="10k-15k">10k - 15k</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15k-25k" id="15k-25k" />
            <label htmlFor="15k-25k">15k - 25k</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="more-than-25k" id="more-than-25k" />
            <label htmlFor="more-than-25k">more than 25K</label>
          </div>
        </RadioGroup>
      </div>

      <Button className="w-full bg-orange-600 hover:bg-orange-700">
        Apply Filter
      </Button>
    </div>
  );
};

export default JobSidebar;
