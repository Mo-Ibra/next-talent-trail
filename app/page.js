import Navbar from "@/components/layout/navbar/navbar";
import Hero1 from "@/components/sections/hero/Hero1";
import Features1 from "@/components/sections/features/Features1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Footer from "@/components/sections/footer/Footer";
import Categories1 from "@/components/sections/categories/Categories1";
import PopularJobs from "@/components/sections/popular-jobs/popular-jobs";


function Home() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Categories1 />
      <PopularJobs />
      {/* <Features1 /> */}
      {/* Featured Jobs */}
      {/* <Testimonials1 /> */}
      {/* logos */}
      {/* Blog */}
      {/* Get App */}
      {/* Subscribe */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;