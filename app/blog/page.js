import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import BlogGrid from "@/components/sections/blog/blog-grid";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function BlogPage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <BlogGrid />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default BlogPage;