"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AlertCircle, Search } from "lucide-react"; // Example icons from react-lucide
import { FaReact, FaNode } from "react-icons/fa"; // Example icons from react-icons

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState("features");

  const sections = [
    { id: "features", title: "Features" },
    { id: "installation", title: "Installation" },
    { id: "folder-structure", title: "Folder Structure" },
    { id: "libraries", title: "Libraries Used" },
    { id: "changelog", title: "Changelog" },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 border-r">
        <h2 className="text-xl font-bold mb-6">Documentation</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer ${
                activeSection === section.id
                  ? "text-blue-500 font-semibold"
                  : "hover:text-blue-400"
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Features Section */}
        <section id="features" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Responsive design with mobile-first approach.</li>
            <li>Built with Next.js for fast performance.</li>
            <li>Shadcn UI components for accessibility and customizability.</li>
            <li>Tailwind CSS utility-first styling.</li>
            <li>Light and Dark mode support.</li>
            <li>Dynamic job listing with sidebar filters and pagination.</li>
            <li>SEO-friendly and deployment-ready.</li>
          </ul>
        </section>

        {/* Installation Section */}
        <section id="installation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Installation</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Download the theme package from Revaxarts.</li>
            <li>Extract the ZIP file to your desired project directory.</li>
            <li>Run <code className="bg-gray-200 px-2 rounded">npm install</code> or <code className="bg-gray-200 px-2 rounded">yarn install</code>.</li>
            <li>Start the development server with <code className="bg-gray-200 px-2 rounded">npm run dev</code>.</li>
          </ol>
        </section>

        {/* Folder Structure Section */}
        <section id="folder-structure" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Folder Structure</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            <code>
              .
              ├── components
              │   ├── common
              │   └── ui
              ├── data
              ├── pages
              ├── public
              ├── styles
              ├── tailwind.config.js
              └── package.json
            </code>
          </pre>
        </section>

        {/* Libraries Section */}
        <section id="libraries" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Libraries Used</h2>
          <p className="mb-4">Here are the key libraries used in this project:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Shadcn UI:</strong> A modern UI library for accessible
              components. Preview:
              <Card className="mt-4">
                <CardHeader>Example Card</CardHeader>
                <CardContent>This is a sample card component.</CardContent>
              </Card>
            </li>
            <li>
              <strong>React Lucide:</strong> Lightweight icon library.
              Example: <AlertCircle className="inline-block ml-2" />
            </li>
            <li>
              <strong>React Icons:</strong> Icon packs like FontAwesome and Material.
              Example: <FaReact className="inline-block ml-2 text-blue-500" />{" "}
              <FaNode className="inline-block ml-2 text-green-500" />
            </li>
          </ul>
        </section>

        {/* Changelog Section */}
        <section id="changelog">
          <h2 className="text-3xl font-semibold mb-4">Changelog</h2>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">
              v1.0.0 - Initial Release (January 2025)
            </h3>
            <ul className="list-disc pl-5">
              <li>Initial release with responsive design and SEO features.</li>
              <li>Includes job listing, filters, and pagination.</li>
              <li>Light and Dark mode support.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DocumentationPage;