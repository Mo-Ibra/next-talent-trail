import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Categories1 from "@/components/sections/categories/Categories1";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

import { categories } from "@/data/categories";

function JobCategoriesPage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Job Categories", href: "/job-categories" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <Categories1 categories={categories} />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobCategoriesPage;
