import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";
import CandidatesGrid from "@/components/sections/candidates/candidates-grid";

import { candidates } from "@/data/candidates";

function CandidatePage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Candidate", href: "/candidates" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        items={breadcrumbItems}
        background="/images/breadcrumb/3.png"
      />
      <CandidatesGrid candidates={candidates} withPagination={true} />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default CandidatePage;
