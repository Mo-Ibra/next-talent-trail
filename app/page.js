import Navbar from "@/components/layout/navbar/navbar";
import Hero1 from "@/components/sections/hero/Hero1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Footer from "@/components/sections/footer/Footer";
import Categories1 from "@/components/sections/categories/Categories1";
import PopularJobs from "@/components/sections/popular-jobs/popular-jobs";
import FeaturedJobs from "@/components/sections/featured-jobs/featured-jobs";
import TopRecruiters from "@/components/sections/top-recruiters/top-recruiters";
import Logos from "@/components/sections/logos/Logos";
import Blog from "@/components/sections/blog/blog";
import Subscribe from "@/components/sections/subscribe/subscribe";

import { categories } from "@/data/categories";

function Home() {

  const renderedCategories = categories.slice(0, 8);

  return (
    <>
      <Navbar />
      <Hero1 />
      <Categories1 categories={renderedCategories} />
      <PopularJobs />
      <FeaturedJobs />
      <TopRecruiters />
      <Testimonials1 />
      <Logos />
      <Subscribe />
      <Blog />
      {/* Get App */}
      <Footer />
    </>
  );
}

export default Home;
