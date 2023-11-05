import React, { useState } from "react";
import "./OrderPage.css";
import Material from "../components/Material";
const additionalMaterials = {
  positionAbsolute: [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ],
};

const OrderPage = () => {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="orderPage">
      <header>
        <h1>TEKNOLOJİK YEMEKLER</h1>
      </header>
      <section>
        <h3>Position Absolute Acı Pizza</h3>
        <p>
          <span>85.50 TL</span>
          <span>4.9 </span>
          <span>200</span>
        </p>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <form>
          <div className="size">
            <p>Boyut Seç</p>
            <label>
              <input type="radio" name="size" value="s" />
              Küçük
            </label>
            <label>
              <input type="radio" name="size" value="m" />
              Orta
            </label>
            <label>
              <input type="radio" name="size" value="l" />
              Büyük
            </label>
          </div>
          <div className="paste">
            <p>Hamur Seç </p>
            <select name="paste">
              <option value="thin">İnce Hamur</option>
              <option value="thick">Kalın Hamur</option>
            </select>
          </div>
          <div className="materials">
            <p>Ek Malzemeler</p>
            <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
            <p className="additionalMaterials">
              {additionalMaterials.positionAbsolute.map((material, index) => (
                <Material key={index} list={material} />
              ))}
            </p>
            <p>Spariş Notu</p>

            <input
              className="note"
              name="orderNote"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
            />
          </div>
          <div className="priceCalculation">
            <div className="counter">
              <button onClick={decreaseCounter}>-</button>
              <p>{counter}</p>
              <button onClick={increaseCounter}>+</button>
            </div>
            <div className="summary">
              <p>Spariş Toplamı</p>
              <p>
                <span>Seçimler</span>
                <span>fiyat</span>
              </p>
              <p>
                <span>Toplam</span>
                <span>Toplam Fiyat</span>
              </p>
              <button> Spariş Ver</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default OrderPage;
