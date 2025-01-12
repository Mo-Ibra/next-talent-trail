import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar1 = () => {
  return (
    <section className="py-4">
      <div className="container">
        <DesktopNav />
        <MobileNav />
      </div>
    </section>
  );
};

export default Navbar1;