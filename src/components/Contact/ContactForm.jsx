import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import { sendContact } from "../../app/features/contactSlice";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Simulate an asynchronous operation (e.g., API call)
      await dispatch(sendContact(formData));

      // Add your logic to handle the form submission (e.g., dispatching an action)
      console.log("Form data submitted:", formData);

      // Reset the form and loading state
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Message sent successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact_form">
      <div className="form_input-group">
        <div className="form_input-div">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="form_control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form_input-div">
          <input
            type="email"
            placeholder="Your Email"
            className="form_control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_input-div">
          <input
            required
            type="text"
            placeholder="Your Subject"
            className="form_control"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form_input-div">
        <textarea
          required
          placeholder="Your Message"
          className="form_control textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="button" disabled={loading}>
        {loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
