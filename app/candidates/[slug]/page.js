"use client";

import Navbar from "@/components/layout/navbar/navbar";
import Blog from "@/components/sections/blog/blog";
import Footer from "@/components/layout/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

import { candidates } from "@/data/candidates";
import CandidateProfile from "@/components/sections/candidates/candidate-profile";
import { useParams } from "next/navigation";

function CandidateProfilePage() {

  const { slug } = useParams();
  const candidate = candidates.find((candidate) => candidate.slug === slug);

  console.log(candidate);

  return (
    <>
      <Navbar />
      <CandidateProfile candidate={candidate} />
      <Logos />
      <Subscribe />
      <Blog />
      <Footer />
    </>
  );
}

export default CandidateProfilePage;
