/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
import "./portfolio.css";
import { useEffect, useState, useMemo } from "react"; // Import useMemo
import { fetchPortfolioCatData } from "../../app/features/portfolioCategoriesSlice";
import { fetchPortfolioData } from "../../app/features/portfolioSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import TabComponent from "../../components/Portfolio/TabComponent";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("");
  const dispatch = useDispatch();
  const portfolioCatState = useSelector((state) => state.portfolioCategories);
  const portfolioState = useSelector((state) => state.portfolios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchPortfolioCatData()),
          dispatch(fetchPortfolioData()),
        ]);
      } catch (error) {
        toast.error(error.message, { position: "right" });
      }
    };

    fetchData();
  }, [dispatch]);

  const {
    loading: catLoading,
    error: catError,
    portfolioCatData,
  } = portfolioCatState;
  const {
    loading: portfolioLoading,
    error: portfolioError,
    portfolioData,
  } = portfolioState;

  // Ensure portfolioCatData and portfolioData are initialized to an empty array
  const portfolioCatDataSafe = portfolioCatData || [];
  const portfolioDataSafe = portfolioData || [];

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredPortfolio = useMemo(() => {
    if (!portfolioDataSafe || portfolioDataSafe.length === 0) {
      return []; // Return an empty array if portfolioData is empty
    }

    if (!activeTab || activeTab === "All") {
      return portfolioDataSafe;
    }

    return portfolioDataSafe.filter((item) =>
      item.portfolioCategories.some((category) => category.title === activeTab)
    );
  }, [activeTab, portfolioDataSafe]);

  if (catLoading || portfolioLoading) {
    return <Loading />;
  }

  if (catError || portfolioError) {
    return <div>Error: Something went wrong</div>;
  }

  return (
    <section className="portfolio section">
      <h2 className="section_title">
        My <span>Portfolio</span>
      </h2>
      <div className="tab-container">
        {portfolioCatDataSafe.map((item) => (
          <TabComponent
            key={item.id}
            item={item}
            active={activeTab}
            onClick={() => handleTabClick(item.title)}
          />
        ))}
      </div>
      <div className="portfolio_container container grid">
        {filteredPortfolio.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
