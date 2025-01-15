import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import TopRecruiters from "@/components/sections/top-recruiters/top-recruiters";

function CompaniesPage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Companies", href: "/companies" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <TopRecruiters />
      <Testimonials1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default CompaniesPage;