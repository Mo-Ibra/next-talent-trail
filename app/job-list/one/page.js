import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import JobList1 from "@/components/sections/job-list/JobList1";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobListOnePage() {

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
      <JobList1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobListOnePage;
