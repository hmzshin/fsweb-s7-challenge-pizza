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
      <section className="options">
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
      <section>
        <div>
          <div>
            <h3>
              Özel <br /> Lezzetus
            </h3>
            <p>Position:Absolute Acı Burger</p>
            <button>SİPARİŞ VER</button>
          </div>
          <div>
            <h4>
              Hackathlon
              <br />
              Burger Menü
            </h4>
            <button>SİPARİŞ VER</button>
          </div>
          <div>
            <h4>
              <span>Çoooook</span>hızlı <br />
              npm gibi kurye
            </h4>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
        <div>
          <div>
            <p>en çok paketlenen menüler</p>
            <p>Acıktıran Kodlara Doyuran LEzzetler</p>
            <nav>
              <ul>
                <li>
                  <Link>Ramen</Link>
                </li>
                <li>
                  <Link>Pizza</Link>
                </li>
                <li>
                  <Link>Burger</Link>
                </li>
                <li>
                  <Link>French fries</Link>
                </li>
                <li>
                  <Link>Fast food</Link>
                </li>
                <li>
                  <Link>Sosft drinks</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div>
              <img />
              <p>Terminal Pizza</p>
              <p>
                <span>4.9</span>
                <span>(200)</span>
                <span>60₺</span>
              </p>
            </div>
            <div>
              <img />
              <p>Position Absolute Acı Pizza</p>
              <p>
                <span>4.9</span>
                <span>(928)</span>
                <span>85₺</span>
              </p>
            </div>

            <div>
              <img />
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
