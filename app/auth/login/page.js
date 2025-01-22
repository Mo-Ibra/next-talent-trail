import Navbar from "@/components/layout/navbar/navbar";
import Login from "@/components/sections/auth/login";
import Footer from "@/components/layout/footer/Footer";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import ToggleThemeButton from "@/components/common/toggle-theme-button";


function LoginPage() {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
      <ScrollToTopButton />
      <ToggleThemeButton />
    </>
  );
}

export default LoginPage;