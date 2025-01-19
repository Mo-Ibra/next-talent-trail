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

const testimonials = [
  {
    quote:
      "Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.",
    author: "Lisa Smith",
    role: "developer at AppyYou",
    avatar: "/images/avatars/1.png",
    isVisible: false,
  },
  {
    quote:
      "Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.",
    author: "Mark Mills",
    role: "developer at App.com",
    avatar: "/images/avatars/2.png",
    isVisible: true,
  },
  {
    quote:
      "Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.",
    author: "Lisa Smith",
    role: "developer at AppyYou",
    avatar: "/images/avatars/3.png",
    isVisible: false,
  },
];

export default function PostJob() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactEmail: "",
    positionName: "",
    role: "",
    commitment: "",
    companyLogo: "",
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
      setFormData((prev) => ({ ...prev, companyLogo: file.name }));
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
            <h1 className="text-3xl font-bold mb-4">Post a job on JobBoard</h1>
            <p className="text-muted-foreground">
              Find the best talent from around the world on the most exclusive
              job board on the internet.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">1. Your company</h2>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  placeholder="E.g., Acme Inc."
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={errors.companyName ? "border-red-500" : ""}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className={errors.contactEmail ? "border-red-500" : ""}
                />
                {errors.contactEmail && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactEmail}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyLogo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Logo (optional)
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
                    {formData.companyLogo || "No file chosen"}
                  </span>
                  <Input
                    id="logo-upload"
                    name="companyLogo"
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
                  htmlFor="positionName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="positionName"
                  name="positionName"
                  placeholder="E.g., Senior Software Engineer"
                  value={formData.positionName}
                  onChange={handleInputChange}
                  className={errors.positionName ? "border-red-500" : ""}
                />
                {errors.positionName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.positionName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role <span className="text-red-500">*</span>
                </label>
                <Select
                  onValueChange={(value) => handleSelectChange("role", value)}
                >
                  <SelectTrigger
                    className={errors.role ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="commitment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Commitment <span className="text-red-500">*</span>
                </label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("commitment", value)
                  }
                >
                  <SelectTrigger
                    className={errors.commitment ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select commitment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
                {errors.commitment && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.commitment}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="jobDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="jobDescription"
                name="jobDescription"
                type="text"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className={errors.jobDescription ? "border-red-500" : ""}
              />
              {errors.jobDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.jobDescription}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="jobSalary"
                className="block text-sm font-medium text-gray-700"
              >
                Job Salary <span className="text-red-500">*</span>
              </label>
              <Input
                id="jobSalary"
                name="jobSalary"
                type="text"
                value={formData.jobSalary}
                onChange={handleInputChange}
                className={errors.jobSalary ? "border-red-500" : ""}
              />
              {errors.jobSalary && (
                <p className="mt-1 text-sm text-red-500">{errors.jobSalary}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700"
              >
                Job Type <span className="text-red-500">*</span>
              </label>
              <Select
                onValueChange={(value) => handleSelectChange("jobType", value)}
              >
                <SelectTrigger
                  className={errors.jobType ? "border-red-500" : ""}
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
                <p className="mt-1 text-sm text-red-500">{errors.jobType}</p>
              )}
            </div>

            <div className="flex space-x-2">
              <Button
                type="submit"
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                Publish Your Job
                <FireExtinguisherIcon className="ml-2 size-4" />
              </Button>
              <Link href="/">
                <Button size="lg" variant="outline">
                  Back Home
                  <HomeIcon className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="hidden lg:block bg-gradient-to-br from-blue-50 to-purple-50 fixed top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 p-12 overflow-auto grid justify-center items-center">
          <div className="space-y-8 max-w-[34rem]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm border border-orange-300 opacity-15 duration-300 hover:opacity-100 cursor-pointer ${
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
