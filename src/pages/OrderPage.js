import React, { useState } from "react";
import "./OrderPage.css";
import Material from "../components/Material";
import { useEffect } from "react";
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
  const [order, setOrder] = useState({
    price: 85.5,
    counter: 1,
    size: "medium",
    paste: "normal",
  });
  const [total, setTotal] = useState(order.price);
  const [isAble, setIsAble] = useState(false); // to render if the number of selected materials reaches number 10
  const [addedMaterial, setAddedMaterial] = useState(0);

  const handleChange = (e) => {
    const { value, name, checked, type, id } = e.target;
    setOrder({
      ...order,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const increaseCounter = (e) => {
    e.preventDefault();
    setOrder({ ...order, counter: order["counter"] + 1 });
  };

  const decreaseCounter = (e) => {
    e.preventDefault();
    if (order.counter > 1) {
      setOrder({ ...order, counter: order["counter"] - 1 });
    }
  };
  let sizeM = 1;
  let thicknessM = 1;
  useEffect(() => {
    order.size === "medium"
      ? (sizeM = 1)
      : order.size === "small"
      ? (sizeM = 0.9)
      : (sizeM = 1.1);
    order.paste === "normal"
      ? (thicknessM = 1)
      : order.paste === "thin"
      ? (thicknessM = 0.9)
      : (thicknessM = 1.1);

    let additionalMaterial = 0;
    for (const key in order) {
      if (order[key] === true) {
        additionalMaterial += 1;
      }
    }

    setAddedMaterial(additionalMaterial);
    console.log(additionalMaterial);

    setTotal(
      order.price * order.counter * sizeM * thicknessM + additionalMaterial * 5
    );

    console.log(order);
  }, [order]);

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
              <input
                onChange={handleChange}
                type="radio"
                name="size"
                value="small"
              />
              Küçük
            </label>
            <label>
              <input
                type="radio"
                name="size"
                onChange={handleChange}
                value="medium"
                defaultChecked
              />
              Orta
            </label>
            <label>
              <input
                type="radio"
                name="size"
                onChange={handleChange}
                value="large"
              />
              Büyük
            </label>
          </div>
          <div className="paste">
            <p>Hamur Seç </p>
            <select
              name="paste"
              defaultValue={"default"}
              onChange={handleChange}
            >
              <option value="default" disabled>
                Lütfen hamur tipini seç
              </option>
              <option value="thin">İnce Hamur</option>
              <option value="normal">Normal Hamur</option>
              <option value="thick">Kalın Hamur</option>
            </select>
          </div>
          <div className="materials">
            <p>Ek Malzemeler</p>
            <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
            <p className="additionalMaterials">
              {additionalMaterials.positionAbsolute.map((material, index) => (
                <Material
                  key={index}
                  list={material}
                  handleChange={handleChange}
                  isAble={isAble}
                />
              ))}
            </p>
            <p>Spariş Notu</p>

            <input
              className="note"
              name="orderNote"
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
            />
          </div>
          <div className="priceCalculation">
            <div className="counter">
              <button onClick={decreaseCounter}>-</button>
              <p>{order.counter}</p>
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
                <span>{total.toFixed(2)}</span>
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
