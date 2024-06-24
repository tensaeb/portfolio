import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <a href="https://linkedin.com/in/tensaeb" className="contact_social-link">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/tensaeb" className="contact_social-link">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/tensaeb" className="contact_social-link">
        <FaDribbble />
      </a>
      <a href="https://twitter.com/tensaeb" className="contact_social-link">
        <FaTwitter />
      </a>
    </>
  );
};

export default Socials;
