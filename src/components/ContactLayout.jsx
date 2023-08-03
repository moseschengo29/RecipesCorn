import ContactForm from "./ContactForm";
import Map from "./Map";
import Footer from "./Footer";

function ContactLayout() {
  return (
    <>
    <div className="contact-page">
      <div className="contact-heading">
        <h2 className="subheading ">Contact</h2>
        <h1 className="heading mg-btm">Got any questions ?</h1>
      </div>
      <div className="contact">
        <ContactForm />
        <Map />
      </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactLayout;
