import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";
import JobPost from "@/components/sections/job-post/JobPost";

function JobPostPage() {
  return (
    <>
      <JobPost />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default JobPostPage;
