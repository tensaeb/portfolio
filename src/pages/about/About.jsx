//component
import Info from "../../components/About/Info";
// import CV from "../../assets/CV.pdf";
import Stats from "../../components/About/Stats";
import Skills from "../../components/About/Skills";
//css
import "./about.css";
import ResumeItem from "../../components/About/ResumeItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { fetchPersonalInfoData } from "../../app/features/personalInfoSlice";
import Loading from "../../components/Loading";
import { fetchStatsData } from "../../app/features/statsSlice";
import { fetchSkillsData } from "../../app/features/skillsSlice";
import { fetchResumeData } from "../../app/features/resumeSlice";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  const dispatch = useDispatch();
  const personalInfoState = useSelector((state) => state.personalInfo);
  const statsState = useSelector((state) => state.stats);
  const skillsState = useSelector((state) => state.skills);
  const resumeState = useSelector((state) => state.resume);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPersonalInfoData());
        dispatch(fetchStatsData());
        dispatch(fetchSkillsData());
        dispatch(fetchResumeData());
      } catch (error) {
        toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
      }
    };

    fetchData();
  }, [dispatch]);

  if (
    personalInfoState.loading ||
    statsState.loading ||
    skillsState.loading ||
    resumeState.loading
  ) {
    return <Loading />;
  }

  if (
    personalInfoState.error ||
    statsState.error ||
    skillsState.error ||
    resumeState.error
  ) {
    return <div>Error: Something went wrong</div>;
  }

  const { personalInfoData, statsData, skillsData, resumeData } = {
    personalInfoData: personalInfoState.personalInfoData,
    statsData: statsState.statsData,
    skillsData: skillsState.skillsData,
    resumeData: resumeState.resumeData,
  };

  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>
        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Info</h3>
            <ul className="info_list grid">
              {personalInfoData &&
                personalInfoData.map((item) => {
                  return <Info item={item} key={item.id} />;
                })}
            </ul>
            <div className="contact_socials">
              <a
                href="https://github.com/tensaeb"
                className="contact_social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://dribbble.com/tensaeb"
                className="contact_social-link"
              >
                <FaDribbble />
              </a>
              <a
                href="https://twitter.com/tensaeb"
                className="contact_social-link"
              >
                <FaTwitter />
              </a>
              {/* <a href="https://youtube.com" className="contact_social-link">
                <FaYoutube />
              </a> */}
            </div>
          </div>
          <div className="stats grid">
            {statsData &&
              statsData.map((item) => {
                return <Stats item={item} key={item.id} />;
              })}
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>
        <div className="skills_container grid">
          {skillsData &&
            skillsData.map((item) => {
              return <Skills item={item} key={item.id} />;
            })}
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section_subtitle subtitle_center">
          Experience & Education
        </h3>

        <div className="resume_container grid">
          {resumeData &&
            resumeData.map((item) => {
              return (
                <div className="resume_data" key={item.id}>
                  <ResumeItem item={item} />
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default About;
