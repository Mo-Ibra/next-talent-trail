import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/sections/footer/Footer";
import JobDetail from "@/components/sections/job-detail/job-detail-1";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobDetailPage() {
  return (
    <>
      <Navbar />
      <JobDetail />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobDetailPage;
