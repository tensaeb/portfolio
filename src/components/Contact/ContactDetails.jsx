import {
  FaDribbble,
  FaEnvelopeOpen,
  FaGithub,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="contact_data">
      <h3 className="contact_title">Dont Hesitate!</h3>
      <p className="contact_description">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="contact_info">
        <div className="info_item">
          <FaEnvelopeOpen className="info_icon" />
          <div>
            <span className="info_title">Mail me</span>
            <h4 className="info_desc">
              <a href="mailto:tensaeb2017@gmail.com">tensaeb2017@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="info_item">
          <FaPhoneSquareAlt className="info_icon" />
          <div>
            <span className="info_title">Call me</span>
            <h4 className="info_desc">
              <a href="tel:+251961146646">+251961146646</a>
            </h4>
          </div>
        </div>
      </div>

      <div className="contact_socials">
        <a href="https://github.com/tensaeb" className="contact_social-link">
          <FaGithub />
        </a>
        <a href="https://dribbble.com/tensaeb" className="contact_social-link">
          <FaDribbble />
        </a>
        <a href="https://twitter.com/tensaeb" className="contact_social-link">
          <FaTwitter />
        </a>
        {/* <a href="https://youtube.com" className="contact_social-link">
                <FaYoutube />
              </a> */}
      </div>
    </div>
  );
};

export default ContactDetails;
