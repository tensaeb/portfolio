/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import Close from "../../assets/Close.svg?react";
import { FiCode, FiFile, FiGlobe, FiMessageSquare } from "react-icons/fi";

const PortfolioItem = ({ item }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio_item">
      <img src={item.img} alt="" className="portfolio_img" />
      <div className="portfolio_hover" onClick={toggleModal}>
        <h3 className="portfolio_title">{item.title}</h3>
      </div>
      {modal && (
        <div className="portfolio_modal">
          <div className="portfolio_modal-content">
            <Close alt="" className="modal_close" onClick={toggleModal} />
            <div className="portfolio_modal-desc">
              <h3 className="modal_title">{item.title}</h3>

              <div className="modal_list grid">
                <div className="modal_item">
                  <div className="modal_desc-title">
                    <span className="item_icon">
                      <FiFile />
                    </span>
                    <span className="item_title">{item.title}</span>
                  </div>
                  <div className="modal_desc-title">
                    <span className="item_icon">
                      <FiMessageSquare />
                    </span>
                    <span className="item_details">{item.description}</span>
                  </div>
                </div>
                <div className="modal_item">
                  <div className="modal_desc-title">
                    <span className="item_icon">
                      <FiGlobe />
                    </span>
                    <span className="item_details">
                      <a
                        href={item.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Preview Link
                      </a>
                    </span>
                  </div>
                  <div className="modal_desc-title">
                    <span className="item_icon">
                      <FiCode />
                    </span>
                    <span className="item_details">
                      {item.languages.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <img src={item.img} alt="" className="modal_img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
