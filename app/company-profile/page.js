import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import CompanyProfile from "@/components/sections/company-detail/CompanyProfile";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function CompanyDetailPage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Company Profile", href: "/company-profile" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <CompanyProfile />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default CompanyDetailPage;