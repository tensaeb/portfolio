import { useDispatch, useSelector } from "react-redux";
import PortfolioItem from "../../components/Portfolio/PortfolioItem";
// import { portfolio } from "../../data";
import "./portfolio.css";
import { useEffect, useState } from "react";
import { fetchPortfolioCatData } from "../../app/features/portfolioCategoriesSlice";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import TabComponent from "../../components/Portfolio/TabComponent";
import { fetchPortfolioData } from "../../app/features/portfolioSlice";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showAllPortfolios, setShowAllPortfolios] = useState(false);
  const dispatch = useDispatch();
  const portfolioCatState = useSelector((state) => state.portfolioCategories);
  const portfolioState = useSelector((state) => state.portfolios);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPortfolioCatData());
        dispatch(fetchPortfolioData());
      } catch (error) {
        toast.error(error.message, { position: "right" });
      }
    };

    fetchData();
  }, [dispatch]);

  if (portfolioCatState.loading || portfolioState.loading) {
    return <Loading />;
  }

  if (portfolioCatState.error || portfolioState.error) {
    return <div>Error: Something went wrong</div>;
  }

  const { portfolioCatData, portfolioData } = {
    portfolioCatData: portfolioCatState.portfolioCatData,
    portfolioData: portfolioState.portfolioData,
  };
  if (!portfolioCatData || !portfolioData) {
    return <Loading />;
  }

  const handleTabClick = (category) => {
    setShowAllPortfolios(category === "All");
    setActiveTab(category);
  };

  const filteredPortfolio = activeTab
    ? portfolioData.filter((item) =>
        item.portfolioCategories.some(
          (category) => category.title === activeTab
        )
      )
    : portfolioData;

  console.log("====================================");
  console.log("filteredPortfolio: ", filteredPortfolio);
  console.log("====================================");

  return (
    <section className="portfolio section">
      <h2 className="section_title">
        My <span>Portfolio</span>
      </h2>
      <div className="tab-container">
        {portfolioCatData &&
          portfolioCatData.map((item) => {
            return (
              <TabComponent
                key={item.id}
                item={item}
                active={activeTab}
                onClick={() => handleTabClick(item.title)}
              />
            );
          })}
      </div>
      <div className="portfolio_container container grid">
        {showAllPortfolios
          ? portfolioData.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))
          : filteredPortfolio.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
      </div>
    </section>
  );
};

export default Portfolio;
