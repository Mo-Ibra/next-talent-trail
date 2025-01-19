import Navbar from "@/components/layout/navbar/navbar";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import Footer from "@/components/sections/footer/Footer";
import Logos from "@/components/sections/logos/Logos";
import Subscribe from "@/components/sections/subscribe/subscribe";

function ContactUs() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <ContactInfo />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
}

export default ContactUs;