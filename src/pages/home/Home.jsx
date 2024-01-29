import { Link } from "react-router-dom";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa6";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img className="home_img" src={Profile} alt="" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I&apos;m Tensae Befekadu</span> Full stack Developer
          </h1>
          <p className="home_description">
            I am an Ethiopian software Engineer focused on developing clean and
            user-freandly experiences, I am passionate about building excellent
            products that improves the lives of those around me.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>
  );
};

export default Home;
