export default interface Product {
  title: string;
  price: number;
  image: HTMLImageElement;
  category: string;
  id: number;
}

export default interface Cart {
  items: Array<Product>;
}
