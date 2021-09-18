import React, { FC, useContext } from "react";
import { Context } from "../../App";
import "./style.scss";

const IceCreamMashineStats: FC = () => {
  const { mashineState, setShowMashineStats } = useContext(Context);

  return (
    <>
      <div className="iceCreamMashineStats__container">
        <div className="iceCreamMashineStats__container_content">
          <h3 className="iceCreamMashineStats__container_content-headetTitle">
            Статистика автомата
          </h3>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во воды <span>{mashineState.water}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во молока <span>{mashineState.milk}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во сливок <span>{mashineState.slivki}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во фисташек <span>{mashineState.fistashki}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во шоколада <span>{mashineState.shokolad}/1000ml</span>
          </p>
          <br />
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во орехов <span>{mashineState.orehi}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во карамели <span>{mashineState.karamel}/1000ml</span>
          </p>
          <p className="iceCreamMashineStats__container_content-tasteItem">
            Кол-во джема <span>{mashineState.dzhem}/1000ml</span>
          </p>
          <h3 className="iceCreamMashineStats__container_content-iceCreamCount">
            Изготовлено мороженого <span>{mashineState.iceCount}</span>
          </h3>
          <h3 className="iceCreamMashineStats__container_content-iceCreamCount">
            Заработано всего <span>{mashineState.priceCount}</span>
          </h3>
        </div>
      </div>
      <div
        className="btnStats"
        onClick={() => setShowMashineStats(false)}></div>
    </>
  );
};

export default IceCreamMashineStats;
