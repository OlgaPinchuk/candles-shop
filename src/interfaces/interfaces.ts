export interface Product {
  readonly id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  imageURL: string;
  details: string[];
}

export interface Favorite {
  id: string;
  name: string;
  price: number;
}
