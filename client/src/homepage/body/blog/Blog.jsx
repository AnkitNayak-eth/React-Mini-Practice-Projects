import React, { useEffect, useState } from "react";
import "./style.css";
import Mixitup from "mixitup";
import blogData from "./blogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const mixer = Mixitup(".work__container", {
      selectors: {
        target: ".work__card",
      },
      animation: {
        duration: 1000,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        nudge: true,
        animateResizeContainer: false,
        effects: "fade scale(1)",
      },
    });
    return () => {
      mixer.destroy();
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="body-blog">
      <section className="section-blog" id="portfolio">
        <span className="section__subtitle" style={{ fontSize: "2rem" }}>
          My Portfolio
        </span>
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        <h2 className="section__title">Recent Works</h2>
        <div className="work__filters">
          <span
            className={`work__item ${activeFilter === "all" && "active-work"}`}
            onClick={() => handleFilterClick("all")}
          >
            All
          </span>
          <span
            className={`work__item ${activeFilter === "web" && "active-work"}`}
            onClick={() => handleFilterClick("web")}
          >
            Recent
          </span>
          <span
            className={`work__item ${
              activeFilter === "movil" && "active-work"
            }`}
            onClick={() => handleFilterClick("movil")}
          >
            Older
          </span>
        </div>
        <div className="work__container grid-blog">
          {blogData
            .filter(
              (item) =>
                (activeFilter === "all" || item.category === activeFilter) &&
                item.title.toLowerCase().includes(searchTerm)
            )
            .map((item, index) => (
              <div key={index} className={`work__card mix ${item.category}`}>
                <img src={item.image} alt="" className="work__img" />
                <h3 className="work__title">{item.title}</h3>
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work__button"
                >
                  Demo <i className="uil uil-link" />
                </a>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
