import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import JobListSidebar4 from "@/components/sections/job-list/JobListSidebar4";

import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

function JobListSevenPage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Job List", href: "/job-list-seven" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <JobListSidebar4 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default JobListSevenPage;
