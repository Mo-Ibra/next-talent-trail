import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";
import JobApply from "@/components/sections/job-apply/job-apply";

function JobApplyPage() {
  return (
    <>
      <JobApply />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default JobApplyPage;
