import React from "react";
import "./HomePage.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import optionIcon1 from "../assets/adv-aseets/icons/1.svg";
import optionIcon2 from "../assets/adv-aseets/icons/2.svg";
import optionIcon3 from "../assets/adv-aseets/icons/3.svg";
import optionIcon4 from "../assets/adv-aseets/icons/4.svg";
import optionIcon5 from "../assets/adv-aseets/icons/5.svg";
import optionIcon6 from "../assets/adv-aseets/icons/6.svg";
import menufood1 from "../assets/adv-aseets/food-1.png";
import menufood2 from "../assets/adv-aseets/food-2.png";
import menufood3 from "../assets/adv-aseets/food-3.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <section className="hero">
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

        <section></section>
      </section>
      <section className="navbar">
        <ul>
          <li>
            <img src={optionIcon1} />
            <Link to="/">YENİ!Kore</Link>
          </li>
          <li>
            <img src={optionIcon2} />
            <Link to="/">Pizza</Link>
          </li>
          <li>
            <img src={optionIcon3} />
            <Link to="/">Burger</Link>
          </li>
          <li>
            <img src={optionIcon4} />
            <Link to="/">Kızartmalar</Link>
          </li>
          <li>
            <img src={optionIcon5} />
            <Link to="/">Fast food</Link>
          </li>
          <li>
            <img src={optionIcon6} />
            <Link to="/">Gazlı İçecekler</Link>
          </li>
        </ul>
      </section>
      <section className="content">
        <div className="featured">
          <div className="left-box">
            <h3>
              Özel <br /> Lezzetus
            </h3>
            <p>Position:Absolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="right-box">
            <div className="top">
              <h4>
                Hackathlon
                <br />
                Burger Menü
              </h4>
              <button>SİPARİŞ VER</button>
            </div>
            <div className="bottom">
              <h4>
                <span>Çoooook</span> hızlı <br />
                npm gibi kurye
              </h4>
              <button>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="top-box">
            <p>en çok paketlenen menüler</p>
            <p>Acıktıran Kodlara Doyuran Lezzetler</p>
            <nav>
              <ul>
                <li>
                  <img src={optionIcon1} />
                  <Link>Ramen</Link>
                </li>
                <li>
                  <img src={optionIcon2} />
                  <Link>Pizza</Link>
                </li>
                <li>
                  <img src={optionIcon3} />
                  <Link>Burger</Link>
                </li>
                <li>
                  <img src={optionIcon4} />
                  <Link>French fries</Link>
                </li>
                <li>
                  <img src={optionIcon5} />
                  <Link>Fast food</Link>
                </li>
                <li>
                  <img src={optionIcon6} />
                  <Link>Sosft drinks</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bottom-box">
            <div className="pizzaCard">
              <img src={menufood1} />
              <p>Terminal Pizza</p>
              <p>
                <span>4.9</span>
                <span>(200)</span>
                <span>60₺</span>
              </p>
            </div>
            <div className="pizzaCard">
              <img src={menufood2} />
              <p>Position Absolute Acı Pizza</p>
              <p>
                <span>4.9</span>
                <span>(928)</span>
                <span>85₺</span>
              </p>
            </div>

            <div className="pizzaCard">
              <img src={menufood3} />
              <p></p>
              <p>
                <span>4.9</span>
                <span>(462)</span>
                <span>75₺</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
