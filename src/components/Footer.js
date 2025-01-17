import React from "react";
import "./Footer.css";
import footerIcon1 from "../assets/adv-aseets/icons/icon-1.png";
import footerIcon2 from "../assets/adv-aseets/icons/icon-2.png";
import footerIcon3 from "../assets/adv-aseets/icons/icon-3.png";
import instafoto1 from "../assets/adv-aseets/insta/li-0.png";
import instafoto2 from "../assets/adv-aseets/insta/li-1.png";
import instafoto3 from "../assets/adv-aseets/insta/li-2.png";
import instafoto4 from "../assets/adv-aseets/insta/li-3.png";
import instafoto5 from "../assets/adv-aseets/insta/li-4.png";
import instafoto6 from "../assets/adv-aseets/insta/li-5.png";
import twitterlogo from "../assets/adv-aseets/x-twitter (1).svg";

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <div className="left-box">
          <section className="address">
            <h2>
              Teknolojik <br />
              Yemekler
            </h2>
            <p>
              <img src={footerIcon1} alt="" /> 341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
            <p>
              <img src={footerIcon2} alt="" />
              acitim@teknolojikyemekler.com
            </p>
            <p>
              <img src={footerIcon3} alt="" />
              +902161234567
            </p>
          </section>
          <section className="hot-menu">
            <h4>Sıccacık Menuler</h4>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </section>
        </div>

        <div className="instagram">
          <p>Instagram</p>
          <div className="fotos">
            <img src={instafoto1} alt="instagram-post" />
            <img src={instafoto2} alt="instagram-post" />
            <img src={instafoto3} alt="instagram-post" />
            <img src={instafoto4} alt="instagram-post" />
            <img src={instafoto5} alt="instagram-post" />
            <img src={instafoto6} alt="instagram-post" />
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>2023 Teknolojik Yemekler</p>
        <img src={twitterlogo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
