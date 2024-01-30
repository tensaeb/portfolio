import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Dont Hesitate!</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">tensaeb2017@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">+251961146646</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <a href="https://facebook.com" className="contact_social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact_social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact_social-link">
              <FaYoutube />
            </a>
            <a href="https://dribbble.com" className="contact_social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form action="" className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
              />
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
      </div>
    </section>
  );
};
export default Contact;
