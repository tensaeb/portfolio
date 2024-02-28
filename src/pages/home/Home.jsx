import { Link } from "react-router-dom";
// import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa6";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersonalInfoData } from "../../app/features/personalInfoSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const dispatch = useDispatch();
  const personalInfoState = useSelector((state) => state.personalInfo);

  useEffect(() => {
    dispatch(fetchPersonalInfoData()).catch((error) => {
      // Handle errors here or in the Redux slice
      toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    });
  }, [dispatch]);

  // console.log("personalInfoState:", personalInfoState);

  if (!personalInfoState || personalInfoState.loading) {
    return <Loading />;
  }

  const { personalInfoData, error } = personalInfoState;

  if (!personalInfoData) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {/* <Loading /> */}
      <section className="home section grid">
        {/* Map over the data array and render images */}
        {personalInfoData &&
          personalInfoData.map((item, index) => (
            <img
              key={index}
              className="home_img"
              src={item.img}
              alt="Tensae Profile"
              loading="lazy" // Lazy loading
              sizes="(max-width: 600px) 100vw, 50vw" // Responsive image sizes
            />
          ))}
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
