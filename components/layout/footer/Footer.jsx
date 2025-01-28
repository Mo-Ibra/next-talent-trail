import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { menu } from "./menu";

const Footer = () => {
  return (
    <section className="py-32">
      <footer className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
            <div>
              <span className="flex items-center justify-center lg:justify-start">
                <img src="/logo.svg" alt="logo" className="h-11" />
                <p className="text-3xl font-semibold">Lent Trail</p>
              </span>
              <p className="mt-6 text-sm text-muted-foreground">
                Search and apply for the latest jobs in IT, Marketing, Sales,
                Finance, Engineering, and more. Get ahead in your career today!
              </p>
            </div>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-6 lg:gap-20">
            {menu.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
          <p>© 2025. All rights reserved.</p>
          <ul className="flex justify-center gap-4 lg:justify-start">
            <li className="hover:text-primary">
              <a href="#"> Terms and Conditions</a>
            </li>
            <li className="hover:text-primary">
              <a href="#"> Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
