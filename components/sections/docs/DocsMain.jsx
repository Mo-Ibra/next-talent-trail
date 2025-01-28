"use client";

import OverviewIntro from "./OverviewIntro";
import FeaturesSection from "./Features";
import TechStackSection from "./TechStack";
import InstallationSection from "./Installation";
import UIIntro from "./UIIntro";
import ButtonsSection from "./Buttons";
import InputsSection from "./Inputs";
import IconsSection from "./Icons";
import ChangelogSection from "./Changelog";
import ContactSection from "./Contact";
import DocsSidebar from "./Sidebar";

function TalentTrailDocs() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto px-32 sm:px-36 lg:px-40 flex gap-8">
        {/* Main Content */}
        <div className="flex-grow space-y-10">

          <OverviewIntro />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Features Section */}
          <FeaturesSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Tech Stack Section */}
          <TechStackSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Installation Section */}
          <InstallationSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* UI Elements Section */}
          <UIIntro />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Buttons Section */}
          <ButtonsSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Inputs section */}
          <InputsSection />

          <hr />

          {/* Icons Section */}
          <IconsSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Changelog Section */}
          <ChangelogSection />

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Contact Section */}
          <ContactSection />

        </div>

        {/* Sidebar */}
        <DocsSidebar />
      </div>
    </section>
  );
}

export default TalentTrailDocs;
