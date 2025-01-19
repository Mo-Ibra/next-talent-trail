import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import JobListSidebar2 from "@/components/sections/job-list/JobListSidebar2";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function JobListFivePage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Job List", href: "/job-list-five" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <JobListSidebar2 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default JobListFivePage;
