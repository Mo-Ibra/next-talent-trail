"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Pagination } from "@/components/common/pagination";
import { useState } from "react";

const categoryColors = {
  Arts: "bg-emerald-100 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-600",
  Illustration:
    "bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600",
  Music:
    "bg-purple-100 text-purple-600 hover:bg-purple-100 hover:text-purple-600",
};

import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="py-16 px-4 md:px-6 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-orange-500">
            Our Blog
          </Badge>
          <h2 className="text-4xl font-bold">
            You can find our latest
            <br />
            blog posts.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  className={`absolute top-4 left-4 ${
                    categoryColors[post.category]
                  }`}
                  variant="secondary"
                >
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-orange-600 hover:no-underline hover:text-orange-700"
                    >
                      Read More →
                    </Button>
                  </Link>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <span>by</span>
                    <span className="font-medium">{post.publisher.name}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      </div>
    </section>
  );
}

export default BlogGrid;
