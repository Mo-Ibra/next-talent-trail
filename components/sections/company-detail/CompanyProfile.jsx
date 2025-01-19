"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  User,
  Building2,
  Users,
  Globe,
  HandshakeIcon,
} from "lucide-react";

function CompanyProfile() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    question: "",
    comment: "",
  });

  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Comment form submitted:", commentForm);
  };

  const companyDetails = [
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Founded:",
      value: "2003",
    },
    {
      icon: <User className="h-4 w-4" />,
      label: "Founder:",
      value: "Niklas Zennström",
    },
    {
      icon: <Building2 className="h-4 w-4" />,
      label: "Headquarters:",
      value: "Luxembourg",
    },
    {
      icon: <Users className="h-4 w-4" />,
      label: "Number of employees:",
      value: "788",
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Website:",
      value: "https://skype.com",
    },
  ];

  const vacancies = [
    {
      title: "Software Engineering",
      type: "Full Time",
      salary: "$750 - $1100/mo",
      location: "Australia",
      platform: "Skype",
      postedAt: "Posted 3 Days ago",
    },
    {
      title: "Web Developer",
      type: "Remote",
      salary: "$2500 - $3000/mo",
      location: "America",
      platform: "Skype",
      postedAt: "Posted 4 Days ago",
    },
  ];

  return (
    <section className="py-12 relative">

      <div className="container mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/2-2.png"
              alt="Google"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-2xl font-bold">Google</h1>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                France Paris
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">See Jobs</Button>
            <Button className="bg-orange-600 hover:bg-orange-700">Follow</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2">

            {/* Company Story */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Company Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters as opposed.
                  </p>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Office Images */}
            <div className="grid gap-4 mb-8">
              <div className="aspect-video w-full relative rounded-lg overflow-hidden">
                <Image
                  src="/images/features/6.jpg"
                  alt="Office main"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/7.jpg"
                    alt="Office space 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/features/8.jpg"
                    alt="Office space 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vacancies */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Vacancies:</h2>
                <div className="space-y-6">
                  {vacancies.map((vacancy, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between pb-6 last:pb-0 border-b last:border-0"
                    >
                      <div>
                        <h3 className="font-semibold mb-2">{vacancy.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Badge
                            variant="secondary"
                            className="bg-orange-100 text-orange-600 hover:bg-orange-200 cursor-pointer"
                          >
                            {vacancy.type}
                          </Badge>
                          <span>{vacancy.salary}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {vacancy.postedAt}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          {vacancy.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comment Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Leave A Comment:</h2>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={commentForm.name}
                        onChange={(e) =>
                          setCommentForm({
                            ...commentForm,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={commentForm.email}
                        onChange={(e) =>
                          setCommentForm({
                            ...commentForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Comment"
                      className="min-h-[150px]"
                      value={commentForm.comment}
                      onChange={(e) =>
                        setCommentForm({
                          ...commentForm,
                          comment: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">

            {/* Map */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d2.276995233454232!3d48.85883773930695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Company Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {companyDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      {detail.icon}
                      <span className="text-gray-500">{detail.label}</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Contact us</h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Your Question"
                    value={contactForm.question}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        question: e.target.value,
                      })
                    }
                  />
                  <Textarea
                    placeholder="Your Comment"
                    className="min-h-[100px]"
                    value={contactForm.comment}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        comment: e.target.value,
                      })
                    }
                  />
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-500/50 opacity-20 rounded-full top-60 blur-1xl -right-60 -z-10"></div>
        <HandshakeIcon className="absolute w-96 h-96 text-orange-500/5 -bottom-10 -right-20 -z-10" />
        <MapPin className="absolute w-96 h-96 text-orange-500/5 -top-10 -left-20 -z-10" />
      </div>
    </section>
  );
}

export default CompanyProfile;
