import Navbar from "@/components/layout/navbar/navbar";
import Hero1 from "@/components/sections/hero/Hero1";
import Features1 from "@/components/sections/features/Features1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Footer from "@/components/sections/footer/Footer";
import Categories1 from "@/components/sections/categories/Categories1";
import PopularJobs from "@/components/sections/popular-jobs/popular-jobs";
import FeaturedJobs from "@/components/sections/featured-jobs/featured-jobs";
import TopRecruiters from "@/components/sections/top-recruiters/top-recruiters";
import Logos from "@/components/sections/logos/Logos";
import Blog from "@/components/sections/blog/blog";


function Home() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Categories1 />
      <PopularJobs />
      <FeaturedJobs />
      <TopRecruiters />
      <Testimonials1 />
      <Logos />
      <Blog />
      {/* Get App */}
      {/* Subscribe */}
      <Footer />
    </>
  );
}

export default Home;