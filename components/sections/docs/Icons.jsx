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

const IconsSection = () => {
  return (
    <div id="icons">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 mb-6 dark:text-gray-400">
        🎨 Icons
      </h2>
      <div className="space-y-4">
        <p className="text-gray-600">
          I use two libraries for icons: <strong>react-icons</strong> and{" "}
          <strong>lucide-react</strong>. You can easily import and use icons
          from either library.
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
  );
};

export default IconsSection;