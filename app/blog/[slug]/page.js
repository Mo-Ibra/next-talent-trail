"use client";

import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import BlogContent from "@/components/sections/blog/blog-content";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import { useParams } from "next/navigation";

import { blogPosts } from "@/data/blog-posts";

function SingleBlogPage() {

  const { slug } = useParams();
  const blogPost = blogPosts.find((post) => post.slug === slug);

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