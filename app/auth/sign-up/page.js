import Navbar from "@/components/layout/navbar/navbar";
import Register from "@/components/sections/auth/register";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";


function SignUpPage() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default SignUpPage;