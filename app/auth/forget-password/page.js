import Navbar from "@/components/layout/navbar/navbar";
import ForgetPassword from "@/components/sections/auth/forget-password";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";

function ForgetPasswordPage() {
  return (
    <>
      <Navbar />
      <ForgetPassword />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default ForgetPasswordPage;