import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import Hero1 from "@/components/sections/hero/Hero1";
import FeaturedJobs from "@/components/sections/featured-jobs/featured-jobs";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import Features1 from "@/components/sections/features/Features1";
import FAQ1 from "@/components/sections/faq/Faq1";
import Categories2 from "@/components/sections/categories/Categories2";
import Team from "@/components/sections/team/Team";
import Hero2 from "@/components/sections/hero/Hero2";

import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

import { categories } from "@/data/categories";
import { jobs } from "@/data/jobs";

function HomePageTwo() {
  
  const renderedCategories = categories.slice(0, 10);
  const renderedJobs = jobs.slice(0, 6);

  return (
    <>
      <Navbar />
      <Hero2 />
      <Categories2 categories={renderedCategories} />
      <FeaturedJobs jobs={renderedJobs} />
      <Features1 />
      <Team />
      <FAQ1 />
      <Logos />
      <Subscribe />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default HomePageTwo;
