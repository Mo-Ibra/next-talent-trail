import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

import DocsMain from "@/components/sections/docs/DocsMain";

function DocsPage() {
  return (
    <>
      <DocsMain />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default DocsPage;