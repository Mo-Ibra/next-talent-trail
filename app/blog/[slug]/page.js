"use client";

import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import BlogContent from "@/components/sections/blog/blog-content";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import { useParams } from "next/navigation";

import { blogPosts } from "@/data/blog-posts";

function SingleBlogPage() {
  const { slug } = useParams();
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Blog Post Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <BlogContent content={blogPost} />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default SingleBlogPage;
