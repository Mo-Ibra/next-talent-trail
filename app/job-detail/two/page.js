import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import JobDetail2 from "@/components/sections/job-detail/job-detail-2";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobDetailPage() {
  return (
    <>
      <Navbar />
      <JobDetail2 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobDetailPage;
