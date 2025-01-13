import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Categories1 from "@/components/sections/categories/Categories1";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobCategoriesPage() {
  return (
    <>
      <Navbar />
      {/* Breadcrumb */}
      <Categories1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobCategoriesPage;