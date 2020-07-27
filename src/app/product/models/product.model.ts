export interface Product {
  id?: string;
  name: string;
  description: string;
  thumbnail: string;
  variants: {
    name: string;
    price: number;
  }[];
}
