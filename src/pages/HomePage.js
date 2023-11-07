import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div className="homePage">
      <header>
        <h1>Teknolojik Yemekler</h1>
        {/* <img src={logo} /> */}
      </header>
      <section>
        <p>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </p>
        <button data-cy="to-orderpage-button">
          <Link to="/order">ACIKTIM</Link>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
