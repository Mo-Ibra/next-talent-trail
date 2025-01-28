"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
  FaHome, FaFacebook, FaTwitch, FaSearch, FaUser, FaHeart, FaBell, FaCog, FaEnvelope, 
  FaPhone, FaStar, FaThumbsUp, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaCode, 
  FaBars, FaPlus, FaMinus, FaTimes 
} from "react-icons/fa";

import { 
  LucideHome, LucideArrowBigDown, LucideArrowBigUp, LucideArrowUp, LucideArrowDown, 
  LucideSearch, LucideUser, LucideHeart, LucideBell, LucideMail, LucidePhone, LucideStar, 
  LucideThumbsUp, LucideTwitter, LucideInstagram, LucideLinkedin, LucideGithub, LucideCode, 
  LucidePlus, LucideMinus, LucideX
} from "lucide-react";

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Features", href: "#features" },
      { title: "Tech Stack", href: "#tech-stack" },
      { title: "Installation", href: "#installation" },
    ],
  },
  {
    title: "UI Elements",
    items: [
      { title: "Introduction", href: "#ui_introduction" },
      { title: "Buttons", href: "#buttons" },
      { title: "Inputs", href: "#inputs" },
      { title: "Icons", href: "#icons" },
    ],
  },
  {
    title: "Details",
    items: [
      { title: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Support",
    items: [{ title: "Contact", href: "#contact" }],
  },
];

function TalentTrailDocs() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto px-32 sm:px-36 lg:px-40 flex gap-8">
        {/* Main Content */}
        <div className="flex-grow space-y-10">
          {/* Introduction Section */}
          <div id="introduction" className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Talent Trail 🌟
            </h1>
            <p className="text-lg text-gray-600">
              Talent Trail is a modern job board application built with{" "}
              <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
              <strong>ShadCN UI</strong>. It connects job seekers and employers
              seamlessly, offering advanced features like job filtering, user
              authentication, and more.
            </p>
            <p className="text-lg font-semibold text-orange-500">
              Let Talent Trail lead the way to your next career adventure!
            </p>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Features Section */}
          <div id="features">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              🚀 Features
            </h2>
            <ul className="ml-6 list-disc text-gray-600 space-y-2">
              <li>
                Built with latest <strong>Next.js</strong> (Next 15).
              </li>
              <li>
                Uses the latest <strong>Tailwind CSS</strong>.
              </li>
              <li>More than 34 Next.js pages.</li>
              <li>More than 134 JavaScript files.</li>
              <li>Dark and Light Modes support.</li>
              <li>4 unique home pages.</li>
              <li>Free updates and responsive layout.</li>
              <li>Animation with Framer Motion.js.</li>
              <li>Image optimization with Next.js Image.</li>
              <li>Well-structured, SEO-ready, and modern design.</li>
              <li>ShadCN UI elements for easy customization.</li>
              <li>
                Icon libraries: <strong>react-icons</strong> and{" "}
                <strong>lucide-react</strong>.
              </li>
              <li>24-hour support.</li>
            </ul>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Tech Stack Section */}
          <div id="tech-stack">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              🛠️ Tech Stack
            </h2>
            <ul className="ml-6 list-disc text-gray-600 space-y-2">
              <li>
                <strong>Frontend Framework:</strong> Next.js 15 (React).
              </li>
              <li>
                <strong>Design:</strong> Tailwind CSS.
              </li>
              <li>
                <strong>UI Components:</strong> ShadCN UI.
              </li>
              <li>
                <strong>Animations:</strong> Framer Motion.
              </li>
              <li>
                <strong>Icons:</strong> lucide-react, react-icons.
              </li>
            </ul>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Installation Section */}
          <div id="installation">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              🔧 Installation
            </h2>
            <ol className="ml-6 list-decimal text-gray-600 space-y-2">
              <li>
                Clone the repository:
                <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
                  <code>
                    git clone https://github.com/your-repo/talent-trail.git
                  </code>
                </pre>
              </li>
              <li>
                Install dependencies:
                <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
                  <code>npm install</code>
                </pre>
              </li>
              <li>
                Run the development server:
                <pre className="bg-gray-100 p-4 rounded-md text-gray-800 mt-2">
                  <code>npm run dev</code>
                </pre>
              </li>
            </ol>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* UI Elements Section */}
          <div id="ui_introduction">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              UI Elements: ShadCN UI 🎨
            </h2>
            <p className="text-lg text-gray-600">
              Talent Trail leverages the power of ShadCN UI, a library built
              with <strong>Radix UI primitives</strong> and{" "}
              <strong>Tailwind CSS</strong>. With its modular and accessible
              components, you can easily customize and build scalable
              applications.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
              How to Install:
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
              <code>npm install shadcn-ui</code>
            </pre>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
              And After that you can install any component you want from ShadCN
              UI
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
              <code>npx shadcn@latest add card</code>
            </pre>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
              Example: Card
            </h3>
            <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
              <code>
                {`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        This is a customizable card using ShadCN UI.
      </CardContent>
    </Card>
  );
}`}
              </code>
            </pre>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-4">
              Here we go.
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Example Card</CardTitle>
              </CardHeader>
              <CardContent>
                This is a customizable card using ShadCN UI.
              </CardContent>
            </Card>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Buttons Section */}
          <div id="buttons">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              🔘 Buttons
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                You can easily create your button with Tailwind CSS classes.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
                <code>
                  {`<div className="flex flex-wrap gap-4">
  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
    Primary
  </button>
  <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
    Secondary
  </button>
  <button className="px-4 py-2 bg-red-500 text-white rounded-md">
    Danger
  </button>
  <button
    className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
    disabled
  >
    Disabled
  </button>
  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
    Success
  </button>
</div>`}
                </code>
              </pre>
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Primary
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                  Secondary
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                  Danger
                </button>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
                  disabled
                >
                  Disabled
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Success
                </button>
              </div>
              <p className="text-gray-600">
                You can use shadcn ready button as well
              </p>

              <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
                <code>
                  {`<Button className="m-2" variant="default">default</Button>
<Button variant="destructive">destructive</Button>
<Button variant="outline">outline</Button>
<Button variant="secondary">secondary</Button>
<Button variant="ghost">ghost</Button>
<Button variant="link">link</Button>`}
                </code>
              </pre>

              <Button className="m-2" variant="default">
                default
              </Button>
              <Button className="m-2" variant="destructive">
                destructive
              </Button>
              <Button className="m-2" variant="outline">
                outline
              </Button>
              <Button className="m-2" variant="secondary">
                secondary
              </Button>
              <Button className="m-2" variant="ghost">
                ghost
              </Button>
              <Button className="m-2" variant="link">
                link
              </Button>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Inputs section */}
          <div id="inputs">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              📝 Inputs
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                You can easily create and customize your input with Tailwind CSS
                classes.
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
                <code>
                  {`<input type="text" className="border border-gray-300 p-2 rounded-md" placeholder="Enter your name" />`}
                </code>
              </pre>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Enter your name"
              />
              <p className="text-gray-600">
                You can use shadcn ready input as well
              </p>
              <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
                <code>{`<Input placeholder="Enter your name" />`}</code>
              </pre>
              <Input placeholder="Enter your name" />
            </div>
          </div>

          <hr />

          {/* Icons Section */}
          <div id="icons">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              🎨 Icons
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                I use two libraries for icons: <strong>react-icons</strong> and{" "}
                <strong>lucide-react</strong>. You can easily import and use
                icons from either library.
              </p>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
                Example Usage
              </h2>
              <pre className="bg-gray-100 p-4 rounded-md text-gray-800 dark:text-gray-400">
                <code>
                  {`import { FaHome } from "react-icons/fa";

<FaHome />`}
                </code>
              </pre>
              <pre className="bg-gray-100 p-4 rounded-md text-gray-800 dark:text-gray-400">
                <code>
                  {`import { LucideHome } from "lucide-react";

<LucideHome />`}
                </code>
              </pre>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-2">
                  React Icons:
                </h2>
                <div className="flex flex-wrap">
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaHome />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaTwitch />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaSearch />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaUser />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaHeart />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaBell />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaCog />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaPhone />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaStar />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaThumbsUp />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaTwitter />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaInstagram />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaLinkedin />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaGithub />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaCode />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaBars />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaPlus />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaMinus />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <FaTimes />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400 my-2">
                  Lucide Icons:
                </h2>
                <div className="flex flex-wrap">
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideHome />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideArrowBigDown />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideArrowBigUp />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideArrowUp />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideArrowDown />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideSearch />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideUser />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideHeart />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideBell />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideMail />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucidePhone />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideStar />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideThumbsUp />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideTwitter />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideInstagram />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideLinkedin />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideGithub />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideCode />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucidePlus />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideMinus />
                  </div>
                  <div className="m-2 bg-white shadow-md p-4 border cursor-pointer flex items-center justify-center">
                    <LucideX />
                  </div>
                </div>
              </div>

              {/* Installation Section */}
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Changelog Section */}
          <div id="changelog">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              📝 Changelog
            </h2>
            <ul className="ml-6 list-disc text-gray-600 space-y-2">
              <li>
                <strong>Version 1.0.0:</strong> Initial release.
              </li>
            </ul>
          </div>

          <hr className="border-gray-200 dark:border-gray-400" />

          {/* Contact Section */}
          <div id="contact">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
              📫 Contact
            </h2>
            <p className="text-gray-600">
              For any support or feedback, reach out at:
            </p>
            <p className="text-gray-800 font-bold">
              mohamedelgedwy245@gmail.com
            </p>
          </div>
        </div>
        {/* Sidebar */}
        <div className="hidden lg:block sticky top-20 self-start w-64 shrink-0 border-l">
          <div className="pl-6">
            {navigation.map((group) => (
              <div key={group.title} className="pb-8">
                <h4 className="mb-1 rounded-md px-2 py-1 text-orange-500 font-bold text-2xl">
                  {group.title}
                </h4>
                {group.items?.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-1 text-sm hover:bg-accent"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentTrailDocs;
