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
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { FireExtinguisherIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

import { testimonials2 } from "@/data/testimonials";

function JobApply() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactEmail: "",
    positionName: "",
    role: "",
    commitment: "",
    candidateCV: "",
    jobDescription: "",
    jobSalary: "",
    jobType: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, candidateCV: file.name }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.companyName.length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }
    if (formData.positionName.length < 2) {
      newErrors.positionName = "Position name must be at least 2 characters";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    if (!formData.commitment) {
      newErrors.commitment = "Please select a commitment type";
    }

    if (!formData.jobDescription) {
      newErrors.jobDescription = "Please enter a job description";
    }

    if (!formData.jobSalary) {
      newErrors.jobSalary = "Please enter a job salary";
    }

    if (!formData.jobType) {
      newErrors.jobType = "Please select a job type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      // Here you would typically send the data to your server
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Form Section */}
      <div className="p-6 md:p-8 lg:p-12 overflow-auto">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Apply for a job</h1>
            <p className="text-muted-foreground">
              Fill out the form below to apply for a job at our company.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">1. Your Information</h2>

              <div>
                <label
                  htmlFor="candidateName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Your Name <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="candidateName"
                  name="candidateName"
                  placeholder="E.g., Acme Inc."
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  className={errors.candidateName ? "border-orange-500" : ""}
                />
                {errors.candidateName && (
                  <p className="mt-1 text-sm text-orange-500">
                    {errors.candidateName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="candidateEmail"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Your Email <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="candidateEmail"
                  name="candidateEmail"
                  type="email"
                  value={formData.candidateEmail}
                  onChange={handleInputChange}
                  className={errors.candidateEmail ? "border-orange-500" : ""}
                />
                {errors.candidateEmail && (
                  <p className="mt-1 text-sm text-orange-500">
                    {errors.candidateEmail}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="candidateCV"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2"
                >
                  Your CV <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() =>
                      document.getElementById("logo-upload")?.click()
                    }
                  >
                    Choose File
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {formData.candidateCV || "No file chosen"}
                  </span>
                  <Input
                    id="logo-upload"
                    name="candidateCV"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            {/* Role Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">2. The role</h2>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Your Location <span className="text-orange-500">*</span>
                </label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("location", value)
                  }
                >
                  <SelectTrigger
                    className={errors.location ? "border-orange-500" : ""}
                  >
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="florida">Florida</SelectItem>
                    <SelectItem value="newyork">New York</SelectItem>
                    <SelectItem value="california">California</SelectItem>
                    <SelectItem value="northcarolina">
                      North Carolina
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="mt-1 text-sm text-orange-500">{errors.location}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="motivationLetter"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Motivation letter <span className="text-orange-500">*</span>
                </label>
                <Textarea
                  id="motivationLetter"
                  name="motivationLetter"
                  type="text"
                  value={formData.motivationLetter}
                  onChange={handleInputChange}
                  className={errors.motivationLetter ? "border-orange-500" : ""}
                />
                {errors.motivationLetter && (
                  <p className="mt-1 text-sm text-orange-500">
                    {errors.motivationLetter}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="expectedSalary"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Expected Salary <span className="text-orange-500">*</span>
                </label>
                <Input
                  id="expectedSalary"
                  name="expectedSalary"
                  type="text"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className={errors.expectedSalary ? "border-orange-500" : ""}
                />
                {errors.expectedSalary && (
                  <p className="mt-1 text-sm text-orange-500">
                    {errors.expectedSalary}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="jobType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Your Preferorange Job Type{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("jobType", value)
                  }
                >
                  <SelectTrigger
                    className={errors.jobType ? "border-orange-500" : ""}
                  >
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">On Site</SelectItem>
                    <SelectItem value="part-time">Remote</SelectItem>
                    <SelectItem value="contract">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                {errors.jobType && (
                  <p className="mt-1 text-sm text-orange-500">{errors.jobType}</p>
                )}
              </div>

              <div className="flex space-x-2">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Apply for Job
                  <FireExtinguisherIcon className="ml-2 size-4" />
                </Button>
                <Link href="/">
                  <Button size="lg" variant="outline">
                    Back Home
                    <HomeIcon className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="hidden lg:block bg-gradient-to-br from-blue-50 to-purple-50 dark:from-darkbackground dark:to-darkbackground fixed top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 p-12 overflow-auto grid justify-center items-center">
          <div className="space-y-8 max-w-[34rem]">
            {testimonials2.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-darkgray rounded-lg p-6 shadow-sm border border-orange-300 opacity-15 duration-300 hover:opacity-100 cursor-pointer ${
                  testimonial.isVisible && "!opacity-100"
                }`}
              >
                <blockquote className="text-lg mb-4 text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                    />
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApply;
