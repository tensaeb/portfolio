import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  return (
    <form action="" className="contact_form">
      <div className="form_input-group">
        <div className="form_input-div">
          <input type="text" placeholder="Your Name" className="form_control" />
        </div>
        <div className="form_input-div">
          <input
            type="email"
            placeholder="Your Email"
            className="form_control"
          />
        </div>
        <div className="form_input-div">
          <input
            type="text"
            placeholder="Your Subject"
            className="form_control"
          />
        </div>
      </div>
      <div className="form_input-div">
        <textarea
          placeholder="Your Message"
          className="form_control textarea"
        ></textarea>
      </div>

      <button className="button">
        Send Message
        <span className="button_icon contact_button-icon">
          <FiSend />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
