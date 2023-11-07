import React from "react";
import "./SuccessPage.css";
import Header from "../components/Header";
const SuccessPage = () => {
  return (
    <div className="successPage">
      <Header />
      <section>
        <p data-cy="success-page">
          TEBRİKLER! <br />
          SİPARİŞİNİZ ALINDI!
        </p>
      </section>
    </div>
  );
};
export default SuccessPage;
