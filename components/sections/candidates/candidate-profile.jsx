"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Globe, Phone, Send, Download } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMoneyBill,
  FaTwitter,
} from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const CandidateProfile = ({ candidate }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    question: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

  console.log(candidate);

  return (
    <div className="min-h-screen bg-orange-50 pb-16">
      {/* Header Image */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/images/breadcrumb/1.jpg"
          alt="Profile cover"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 -mt-20">
        <div className="relative grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={candidate.image}
                    alt={candidate.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">{candidate.name}</h1>
                    <p className="text-muted-foreground">
                      {candidate.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600">
                    Obviously I'm Web Developer. Web Developer with over 3 years
                    of experience. Experienced with all stages of the
                    development cycle for dynamic web projects. The as opposed
                    to using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p className="text-gray-600">
                    Data Structures and Algorithms are the heart of programming.
                    initally most of the developers do not realize its
                    importance but when you will start your career in software
                    development, you will find your code is either taking too
                    much time or taking too much space.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Skills :</h2>
                  <div className="space-y-4">
                    {candidate.skillsWithProgress.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="h-2 bg-orange-200 rounded-full">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                {candidate.experienceTimeline && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Experience :</h2>
                    <div className="space-y-6">
                      {candidate.experienceTimeline.map((exp, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={exp.logo || "/placeholder.svg"}
                              alt={exp.company}
                              width={48}
                              height={48}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {exp.company} - {exp.location}
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                              {exp.period}
                            </p>
                            <p className="text-gray-600">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Me:</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
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
                    className="min-h-[150px]"
                    value={contactForm.comment}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        comment: e.target.value,
                      })
                    }
                  />
                  <Button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Detail:</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email :</p>
                      <p>{candidate.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address :</p>
                      <p>15 Razy street</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Country :</p>
                      <p>{candidate.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">Mobile :</p>
                      <p>(+125) 1542-8452</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMoneyBill className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected Salary:
                      </p>
                      <p>{candidate.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Send className="h-4 w-4 text-orange-500 hover:text-orange-600" />
                    <div>
                      <Badge variant="outline">{candidate.status}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-2">Social:</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4 text-orange-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FaLinkedin className="h-4 w-4 text-orange-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FaFacebook className="h-4 w-4 text-orange-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FaTwitter className="h-4 w-4 text-orange-500" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FaInstagram className="h-4 w-4 text-orange-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              className="mb-4 w-full bg-orange-600 hover:bg-orange-700"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">{candidate.cv}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
