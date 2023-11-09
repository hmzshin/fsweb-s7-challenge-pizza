import React, { useState } from "react";
import "./OrderPage.css";
import Material from "../components/Material";
import { useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import banner from "../assets/adv-aseets/adv-form-banner.png";

// Initial data for a default pizza configuration
const defaultPizza = {
  name: "positionAbsolute",
  price: 85.5,
  counter: 1,
  size: "",
  paste: "",
  ingredients: {
    Pepperoni: false,
    Sosis: false,
    "Kanada Jambonu": false,
    "Tavuk Izgara": false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalepeno: false,
    Sarımsak: false,
    Biber: false,
    Ananas: false,
    Kabak: false,
  },
  addedMaterial: function () {
    return Object.keys(this.ingredients).filter((key) => this.ingredients[key])
      .length;
  },
};

// Variables for size and thickness multipliers
let sizeM = 1;
let thicknessM = 1;

const OrderPage = () => {
  // State to track order details
  const [order, setOrder] = useState(defaultPizza);
  // State for tracking calculated price
  const [total, setTotal] = useState(order.price);
  // State to show error messages when clicking the submit button
  const [isShown, setIsShown] = useState(false);
  // State to store data if there is an error after validation or not
  const [isError, setIsError] = useState(true);
  // State for validation errors, initially empty
  const [validationErrors, setValidationErrors] = useState({});

  const history = useHistory();

  // Function to handle changes on input/checkbox/select
  const handleChange = (e) => {
    const { value, name, checked, type, id } = e.target;
    // Check if the changed input belongs to the ingredients array
    if (id === "materialList") {
      order.ingredients[name] = checked;
      setOrder({ ...order });
    } else {
      setOrder({
        ...order,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // Function to increase the number of pizzas to order
  const increaseCounter = (e) => {
    e.preventDefault();
    setOrder({ ...order, counter: order["counter"] + 1 });
  };
  // Function to decrease the number of pizzas to order
  const decreaseCounter = (e) => {
    e.preventDefault();
    if (order.counter > 1) {
      setOrder({ ...order, counter: order["counter"] - 1 });
    }
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    ingredients: Yup.object()
      .test("min4", "En az 4 tane malzeme seçiniz", (obje) => {
        const len = Object.values(obje).filter((isTrue) => isTrue).length;
        return len >= 4;
      })
      .test("max10", "En fazla 10 tane malzeme seçebilirsiniz", (obje) => {
        const len = Object.values(obje).filter((isTrue) => isTrue).length;
        return len <= 10;
      }),
    paste: Yup.string().required("Lütfen hamur tipini seçiniz"),
    size: Yup.string().required("Lütfen pizza boyutunu seçin"),
  });

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShown(true);
    const summary = { ...order };
    summary.totalPrice = total.toFixed(2);

    // If there are no validation errors, make a POST request and navigate to a "success" page
    if (!isError) {
      axios
        .post("https://reqres.in/api/users", summary)
        .then(function (response) {
          history.push("/success");
          console.log("post request is succesful", response.data);
        })
        .catch(function (error) {
          history.push("/");
          alert(
            "Siparişiniz alınamadı. Anasayfaya yönlendiriliyorsunuz.",
            error
          );
        });
    }
  };

  // Use useEffect to perform validation when the "order" state changes
  useEffect(() => {
    validationSchema
      .validate(order, { abortEarly: false })
      .then((response) => {
        setIsError(false);
        console.log("hata yok ", response);
        setValidationErrors({});
      })
      .catch((error) => {
        setIsError(true);
        const object = {};
        error.inner.forEach((element) => {
          object[element.path] = element.message;
        });
        setValidationErrors(object);
      });
  }, [order]);

  // Use useEffect to recalculate the total price when order details change
  useEffect(() => {
    order.size === "large"
      ? (sizeM = 1.1)
      : order.size === "small"
      ? (sizeM = 0.9)
      : (sizeM = 1);
    order.paste === "thick"
      ? (thicknessM = 1.1)
      : order.paste === "thin"
      ? (thicknessM = 0.9)
      : (thicknessM = 1);

    setTotal(
      (order.price * sizeM * thicknessM + order.addedMaterial() * 5) *
        order.counter
    );
    console.log("order", order);
    console.log("number of added material ", order.addedMaterial());
  }, [order]);

  useEffect(() => {
    console.log("validation errors:", validationErrors);
  }, [validationErrors]);

  return (
    <>
      <Header />
      <div className="orderPage">
        <div id="hero">
          <section className="top-section">
            <img src={banner} />
            <h3 data-cy="orderpage-h3">Position Absolute Acı Pizza</h3>
            <p className="priceInfo">
              <span>85.50 TL</span>
              <span>4.9 </span>
              <span>(200)</span>
            </p>
            <p className="pizzaExplanation">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </section>
        </div>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="size ">
              <p>
                Boyut Seç
                {isShown && validationErrors.size && (
                  <span data-cy="paste-error" className="errorMessage">
                    {validationErrors.size}
                  </span>
                )}
              </p>
              <label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="size"
                  value="small"
                  data-cy="small"
                  className="small"
                />
                Küçük
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  onChange={handleChange}
                  value="medium"
                  data-cy="medium"
                />
                Orta
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  onChange={handleChange}
                  value="large"
                  data-cy="large"
                />
                Büyük
              </label>
            </div>
            <div className="paste">
              <p>
                Hamur Seç
                {isShown && validationErrors.paste && (
                  <span data-cy="paste-error" className="errorMessage">
                    {validationErrors.paste}
                  </span>
                )}
              </p>

              <select
                name="paste"
                defaultValue={"default"}
                onChange={handleChange}
                data-cy="select-paste"
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
              <p>
                Ek Malzemeler
                {isShown && validationErrors.ingredients && (
                  <span data-cy="ingredients-error" className="errorMessage">
                    {validationErrors.ingredients}
                  </span>
                )}
              </p>

              <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
              <p className="additionalMaterials">
                {Object.keys(defaultPizza.ingredients).map(
                  (material, index) => (
                    <Material
                      key={index}
                      list={material}
                      handleChange={handleChange}
                      checked={defaultPizza.ingredients[material]}
                    />
                  )
                )}
              </p>

              <p>Sipariş Notu</p>

              <input
                className="note"
                name="orderNote"
                onChange={handleChange}
                placeholder="Siparişine eklemek istediğin bir not var mı ?"
                data-cy="comment-input"
              />
            </div>

            <div className="priceCalculation">
              <div className="counter">
                <button data-cy="decrease-piece" onClick={decreaseCounter}>
                  -
                </button>
                <p>{order.counter}</p>
                <button data-cy="increase-piece" onClick={increaseCounter}>
                  +
                </button>
              </div>
              <div className="summary">
                <p>Sipariş Toplamı</p>
                <p>
                  <span>Seçimler</span>
                  <span>{order.addedMaterial() * 5 * order.counter}₺</span>
                </p>
                <p>
                  <span>Toplam</span>
                  <span data-cy="total-price">{total.toFixed(2)}₺</span>
                </p>
              </div>
              <button
                className="submit-button"
                data-cy="submit-button"
                type="submit"
              >
                Sipariş Ver
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
