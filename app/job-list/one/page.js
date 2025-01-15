import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Categories1 from "@/components/sections/categories/Categories1";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

import { categories } from "@/data/categories";

function JobListOne() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Job List", href: "/job-list-one" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobListOne;
