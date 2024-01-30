import "./contact.css";
import ContactDetails from "../../components/Contact/ContactDetails";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact_container container grid">
        <ContactDetails />

        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
