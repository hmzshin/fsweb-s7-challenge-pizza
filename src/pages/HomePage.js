import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <header>
        <h1>TEKNOLOJİK YEMEKLER</h1>
      </header>
      <section>
        <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
        <button>
          <Link to="/order">ACIKTIM</Link>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
