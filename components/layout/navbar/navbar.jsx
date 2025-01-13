import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <DesktopNav />
        <MobileNav />
      </div>
    </section>
  );
};

export default Navbar;