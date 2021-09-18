import React, { useState } from "react";
import IceCreamPicker from "./components/IceCreamPicker";
import ToppingPicker from "./components/ToppingPicker";
import IceCreamMashineStats from "./components/IceCreamMashineStats";
import Cart from "./components/Cart";
import { IceCream, MashineStats, Topping } from "./types";
import "./styles.scss";

export const Context = React.createContext<any>({});

export default function App() {
  const [mashineState, setMashineState] = useState<MashineStats>({
    milk: 1000,
    water: 1000,
    slivki: 1000,
    fistashki: 1000,
    shokolad: 1000,
    orehi: 1000,
    karamel: 1000,
    dzhem: 1000,
    iceCount: 0,
    priceCount: 0
  });
  const [selectIceCream, setSelectIceCream] = useState<IceCream | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Topping[] | null>(
    null
  );
  const [showCart, setShowCart] = useState(false);
  const [showMashineStatsm, setShowMashineStats] = useState(false);

  console.log(selectIceCream);
  console.log(selectedToppings);

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        selectIceCream,
        setSelectIceCream,
        selectedToppings,
        setSelectedToppings,
        mashineState,
        setShowMashineStats
      }}>
      <div className="App">
        <IceCreamPicker />
        <ToppingPicker />
      </div>

      <div className="btnStats" onClick={() => setShowMashineStats(true)}></div>

      {showCart && <Cart />}
      {showMashineStatsm && <IceCreamMashineStats />}
    </Context.Provider>
  );
}
