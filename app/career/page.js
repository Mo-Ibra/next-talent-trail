import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Career from "@/components/sections/career/career";
import FAQ1 from "@/components/sections/faq/Faq1";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function CareerPage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Career", href: "/career" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <Career />
      <FAQ1 />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default CareerPage;