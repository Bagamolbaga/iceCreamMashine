import React, { FC, useContext } from "react";
import { Context } from "../../App";
import { Topping } from "../../types";
import "./style.scss";

const Cart: FC = () => {
  const { setShowCart, selectIceCream, selectedToppings } = useContext(Context);

  const fullPrice = selectedToppings.reduce(
    (prev: number, current: Topping) => prev + current.price,
    selectIceCream.price
  );

  return (
    <div className="cartContainer">
      <div className="cartContainer__content">
        <h3 className="cartContainer__content_headerTitle">Ваш заказ</h3>
        <p className="cartContainer__content_taste">Вкус</p>
        <p className="cartContainer__content_taste-item">
          {selectIceCream.title} <span>{selectIceCream.price} руб</span>
        </p>
        <p className="cartContainer__content_toppings">Добавки</p>
        {selectedToppings.map((topping: Topping) => (
          <p className="cartContainer__content_toppings-item">
            {topping.title} <span>{topping.price} руб</span>
          </p>
        ))}
        <h4 className="cartContainer__content_fullPrice">
          Общая стоимость <span>{fullPrice} руб</span>
        </h4>
        <div className="cartContainer__content_btnAcces-container">
          <button
            className="cartContainer__content_btnAcces"
            onClick={() => setShowCart(false)}>
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
