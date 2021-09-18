export type IceCream = {
  id: number;
  title: string;
  img: string;
  price: number;
};

export type Topping = {
  id: number;
  title: string;
  img: string;
  price: number;
};

export type Cart = {
  iceCream: IceCream;
  toppings: Topping[] | null;
  fullPrice: number;
};

export type MashineStats = {
  milk: number;
  water: number;
  slivki: number;
  fistashki: number;
  shokolad: number;
  orehi: number;
  karamel: number;
  dzhem: number;
  iceCount: number;
  priceCount: number;
};

//slivochnoe
//  voda 20ml
//  moloko 30ml
//  slovki 50ml

//fistashkovoe
//  voda 20ml
//  moloko 30ml
//  fistashki 50ml

//shokoladnoe
//  voda 20ml
//  moloko 30ml
//  shokolad 50ml

//add toppings {topping} - 20ml
