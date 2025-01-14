import Breadcrumb from "@/components/common/bread-crumb";
import Navbar from "@/components/layout/navbar/navbar";
import Login from "@/components/sections/auth/login";
import Footer from "@/components/sections/footer/Footer";


function LoginPage() {
  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Login", href: "/auth/login" },
  ];

  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;