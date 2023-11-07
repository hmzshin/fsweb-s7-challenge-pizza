import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
const Header = () => {
  return (
    <header className="main-header">
      <div className="content">
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/order">Spariş Oluştur</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
