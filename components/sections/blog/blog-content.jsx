"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ThumbsDown, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navigation = [
  {
    title: "Documentation",
    items: [
      {
        title: "Getting started",
        href: "#",
        items: [
          { title: "Introduction", href: "#" },
          { title: "Configure your interface", href: "#" },
          { title: "Design principles", href: "#" },
          { title: "Design guidelines", href: "#" },
        ],
      },
      {
        title: "Progress with links",
        href: "#",
      },
      {
        title: "Decorating changes",
        href: "#",
      },
      {
        title: "Aspect ratio",
        href: "#",
      },
    ],
  },
];

function BlogContent({ content }) {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex gap-6 min-h-screen">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="container max-w-5xl py-6 lg:py-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-orange-100">
                  <Badge variant="outline" className="text-orange-500">
                    {content.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {content.date}
                  </p>
                </div>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                  {content.title}
                </h1>
                <p className="leading-7 text-muted-foreground">
                  In this guide, we will explore the essential principles and
                  practical tips to ensure that your Simple extensions engage
                  users and integrate seamlessly with our ecosystem.
                </p>

                <div className="space-y-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Introduction
                  </h2>
                  <p className="leading-7 dark:text-gray-400">
                    To create extensions that improve functionality and bring
                    joy to users, it's important to focus on user-centered
                    design, thoughtful layout strategies, and effective use of
                    color and typography. Let's explore how you can successfully
                    integrate your extensions with the Simple experience. If you
                    plan to publish your App on the Marketplace, please review
                    our Marketplace App Guidelines for the Design and Usability
                    section.
                  </p>
                </div>

                <div className="relative my-8">
                  <Image
                    src={content.image}
                    alt="Code preview"
                    width={600}
                    height={300}
                    className="rounded-lg border bg-muted w-full"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Design principles
                  </h2>
                  <p className="leading-7 dark:text-gray-400">
                    Your UI should adhere to the following key principles:
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li className="dark:text-gray-400">
                      <strong>Customer-focused:</strong> The app's purpose and
                      value should be defined around the needs of the users. It
                      should solve a unique problem for them.
                    </li>
                    <li className="dark:text-gray-400">
                      <strong>Simplicity:</strong> Your app should be simple to
                      use and not require extensive learning to get started. It
                      should complement the visual abstraction of code, not
                      complicate it.
                    </li>
                    <li className="dark:text-gray-400">
                      <strong>Design:</strong> Use consistent design elements
                      like color, typography, and button styles throughout your
                      App. This improves the user experience and makes your app
                      easier to navigate.
                    </li>
                  </ul>
                </div>

                {/* Navigation and Feedback */}
                <div className="flex flex-col gap-8 pt-8">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" className="gap-2">
                      <ChevronLeft className="h-4 w-4" />
                      Introduction
                    </Button>
                    <Button variant="ghost" className="gap-2">
                      Crafting your interface
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 border-t border-orange-100 pt-8">
                    <p className="text-sm text-muted-foreground">
                      Did this page help you?
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

export default BlogContent;
