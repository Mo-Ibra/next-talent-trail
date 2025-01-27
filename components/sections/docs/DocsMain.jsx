"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, InfoIcon, ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { navigation } from "./docs-navigation";

function DocsMain() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex gap-6 min-h-screen">


          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="container max-w-5xl py-6 lg:py-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-gray-200">
                  <Badge variant="outline" className="text-orange-500">
                    Documentation
                  </Badge>
                  <p className="text-sm text-gray-500">
                    Last updated: 27 Jan 2025
                  </p>
                </div>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-gray-900">
                  Getting Started
                </h1>
                <p className="leading-7 text-gray-600">
                  Welcome to the documentation for [Your Application Name]! This
                  guide will help you get started with installation, usage, and
                  explore the available features of the application.
                </p>

                {/* Features Section */}
                <div className="space-y-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800">
                    Features
                  </h2>
                  <ul className="ml-6 list-disc text-gray-600">
                    <li>Modern design with responsive layout.</li>
                    <li>Sidebar navigation for quick access to sections.</li>
                    <li>
                      Integrates Shadcn UI components for a cohesive design.
                    </li>
                    <li>
                      Support for React-Lucide and React-Icons for customizable
                      icons.
                    </li>
                  </ul>
                </div>

                {/* Installation Section */}
                <div className="space-y-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800">
                    How to Install
                  </h2>
                  <p>Follow these steps to set up the application:</p>
                  <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
                    <code>
                      git clone https://github.com/your-repo/your-app.git
                      <br />
                      cd your-app
                      <br />
                      npm install
                      <br />
                      npm run dev
                    </code>
                  </pre>
                </div>

                {/* Icon Preview Section */}
                <div className="space-y-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800">
                    Icon Usage
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <InfoIcon className="text-orange-500" />
                      <span>Info Icon (Lucide)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="text-green-500" />
                      <span>Thumbs Up (Lucide)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="text-gray-800" />
                      <span>Chevron Right (Lucide)</span>
                    </div>
                  </div>
                </div>

                {/* Navigation and Feedback */}
                <div className="flex flex-col gap-8 pt-8">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="gap-2">
                      <ChevronLeft className="h-4 w-4" />
                      Previous Section
                    </Button>
                    <Button variant="ghost" className="gap-2">
                      Next Section
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 border-t border-gray-200 pt-8">
                    <p className="text-sm text-gray-500">
                      Was this documentation helpful?
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        Yes
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <ThumbsDown className="h-4 w-4" />
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block sticky top-20 self-start w-64 shrink-0 border-l">
            <div className="pl-6">
              {navigation.map((group) => (
                <div key={group.title} className="pb-8">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
                    {group.title}
                  </h4>
                  {group.items?.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2 py-1 text-sm hover:bg-accent"
                      >
                        {item.title}
                      </Link>
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block rounded-md px-6 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocsMain;
