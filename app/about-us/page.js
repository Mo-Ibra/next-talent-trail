import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import FAQ1 from "@/components/sections/faq/Faq1";
import Features1 from "@/components/sections/features/Features1";
import Features2 from "@/components/sections/features/Features2";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function AboutUsPage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <Features1 />
      <Features2 />
      <FAQ1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default AboutUsPage;