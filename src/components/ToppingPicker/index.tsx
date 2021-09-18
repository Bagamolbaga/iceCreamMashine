import React, { FC, useContext } from "react";
import { Context } from "../../App";
import toppings from "../../toppings.json";
import { Topping } from "../../types";
import "./style.scss";

const ToppingPicker: FC = () => {
  const { selectedToppings, setSelectedToppings, setShowCart } = useContext(
    Context
  );

  const selectTopingHandler = (topping: Topping) => {
    if (selectedToppings === null) {
      setSelectedToppings([topping]);
    } else {
      if (!selectedToppings.includes(topping)) {
        setSelectedToppings([...selectedToppings, topping]);
      }

      if (selectedToppings.includes(topping)) {
        let topp = selectedToppings.filter(
          (top: Topping) => top.id !== topping.id
        );
        setSelectedToppings([...topp]);
      }
    }
  };

  return (
    <>
      <div className="toppingPicker__container">
        <h3 className="toppingPicker__headerTitle">Выберите добавки</h3>
        <div className="toppingPicker__toppingList">
          {toppings.map((topping: Topping) => (
            <div
              className={`toppingPicker__toppingList_toppingItem ${
                selectedToppings !== null &&
                selectedToppings.includes(topping) &&
                "selected"
              }`}
              onClick={() => selectTopingHandler(topping)}
              key={topping.id}>
              <div className="toppingPicker__toppingList_toppingItem-img">
                <img src={topping.img} alt={topping.title} />
              </div>
              <h4 className="toppingPicker__toppingList_toppingItem-title">
                {topping.title}
              </h4>
              <h5 className="toppingPicker__toppingList_toppingItem-price">
                {topping.price} руб
              </h5>
            </div>
          ))}
        </div>
      </div>
      <button
        className="toppingPicker__btnAccess"
        onClick={() => setShowCart(true)}>
        Подтвердить
      </button>
    </>
  );
};

export default ToppingPicker;
