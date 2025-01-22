import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Pricing from "@/components/sections/pricing/pricing";
import PricingFeatures from "@/components/sections/pricing/pricing-features";
import Subscribe from "@/components/sections/subscribe/subscribe";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

function PricingPage() {

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Pricing", href: "/pricing" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <Pricing />
      <PricingFeatures />
      <Logos />
      <Subscribe />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default PricingPage;