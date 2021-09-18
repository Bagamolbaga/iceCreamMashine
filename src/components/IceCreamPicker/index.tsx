import React, { FC, useContext } from "react";
import { Context } from "../../App";
import iceCreams from "../../iceCreams.json";
import { IceCream } from "../../types";
import "./style.scss";

const IceCreamPicker: FC = () => {
  const { selectIceCream, setSelectIceCream } = useContext(Context);

  return (
    <div className="iceCreamPicker__container">
      <h3 className="iceCreamPicker__headerTitle">Выберите мороженое</h3>
      <div className="iceCreamPicker__iceList">
        {iceCreams.map((ice: IceCream) => (
          <div
            className={`iceCreamPicker__iceList_iceItem ${
              selectIceCream !== null &&
              ice.id === selectIceCream.id &&
              "selected"
            }`}
            onClick={() => setSelectIceCream(ice)}
            key={ice.id}>
            <div className="iceCreamPicker__iceList_iceItem-img">
              <img src={ice.img} alt={ice.title} />
            </div>
            <h4 className="iceCreamPicker__iceList_iceItem-title">
              {ice.title}
            </h4>
            <h5 className="iceCreamPicker__iceList_iceItem-price">
              {ice.price} руб
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamPicker;
