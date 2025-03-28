"use client";

import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

import { candidates } from "@/data/candidates";
import CandidateProfile from "@/components/sections/candidates/candidate-profile";
import { useParams } from "next/navigation";

import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

function CandidateProfilePage() {

  const { slug } = useParams();
  const candidate = candidates.find((candidate) => candidate.slug === slug);

  if (!candidate) {
    return (
      <>
        <Navbar />
        <h1>Candidate Not Found</h1>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <CandidateProfile candidate={candidate} />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default CandidateProfilePage;
