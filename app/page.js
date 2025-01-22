import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import Hero1 from "@/components/sections/hero/Hero1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Categories1 from "@/components/sections/categories/Categories1";
import PopularJobs from "@/components/sections/popular-jobs/popular-jobs";
import FeaturedJobs from "@/components/sections/featured-jobs/featured-jobs";
import TopRecruiters from "@/components/sections/top-recruiters/top-recruiters";
import Logos from "@/components/sections/logos/Logos";
import Blog from "@/components/sections/blog/blog";
import Subscribe from "@/components/sections/subscribe/subscribe";

import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

import { categories } from "@/data/categories";
import { jobs } from "@/data/jobs";

function Home() {
  
  const renderedCategories = categories.slice(0, 8);
  const renderedJobs = jobs.slice(0, 6);

  return (
    <>
      <Navbar />
      <Hero1 />
      <Categories1 categories={renderedCategories} />
      <PopularJobs jobs={renderedJobs} />
      <TopRecruiters />
      <Testimonials1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default Home;
