import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import JobList3 from "@/components/sections/job-list/JobList3";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobListThreePage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Job List", href: "/job-list-two" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <JobList3 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobListThreePage;
