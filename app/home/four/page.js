import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import Hero1 from "@/components/sections/hero/Hero1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import PopularJobs from "@/components/sections/popular-jobs/popular-jobs";
import TopRecruiters from "@/components/sections/top-recruiters/top-recruiters";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import FAQ2 from "@/components/sections/faq/Faq2";
import Features2 from "@/components/sections/features/Features2";
import Categories2 from "@/components/sections/categories/Categories2";

import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

import { categories } from "@/data/categories";
import { jobs } from "@/data/jobs";

function HomePageThree() {
  
  const renderedCategories = categories.slice(0, 10);
  const renderedJobs = jobs.slice(0, 6);

  return (
    <>
      <Navbar />
      <Hero1 />
      <Categories2 categories={renderedCategories} />
      <PopularJobs jobs={renderedJobs} />
      <TopRecruiters />
      <Features2 />
      <Testimonials1 />
      <FAQ2 />
      <Logos />
      <Subscribe />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default HomePageThree;
