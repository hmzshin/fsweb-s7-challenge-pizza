import React from "react";
import "./SuccessPage.css";
const SuccessPage = () => {
  return (
    <div className="successPage">
      <header>
        <h1>TEKNOLOJİK YEMEKLER</h1>
      </header>
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
