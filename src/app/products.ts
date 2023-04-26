export default interface Product {
  qty: number;

  title: string;
  price: number;
  image: HTMLImageElement;
  category: string;
  id: number;
}

export default interface Cart {
  items: Array<Product>;
}

export interface Products {
  category: string;
  image: HTMLImageElement;
  title: string;
}
