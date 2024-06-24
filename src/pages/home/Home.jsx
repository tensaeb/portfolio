import { Link } from "react-router-dom";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa6";
import "./home.css";
// import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { TypeAnimation } from "react-type-animation";
import ReactGA from "react-ga4";

const Home = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  });

  if (!Profile) {
    return <Loading />;
  }
  return (
    <>
      {/* <Loading /> */}
      <section className="home section grid">
        <img
          className="home_img"
          src={Profile}
          alt="Tensae Profile"
          loading="lazy" // Lazy loading
          sizes="(max-width: 600px) 100vw, 50vw" // Responsive image sizes
        />

        <div className="home_content">
          <div className="home_data">
            <h1 className="home_title">
              I&apos;m Tensae B. Zeleke <br />
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  4000,
                  "Full-stack Developer",
                  4000, //4sec
                  "UI/UX Designer",
                  4000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="home_description">
              I am an Ethiopian software engineer who focuses on developing
              clean and user-friendly experiences. I am passionate about
              building apps that resonate with users. From creating wireframes
              to deploying functional solutions, I meticulously translate design
              visions into reality.
            </p>
            <Link to="/about" className="button">
              More About Me
              <span className="button_icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="color_block"></div>
      </section>
    </>
  );
};

export default Home;
