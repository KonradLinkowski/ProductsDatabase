export interface Product {
  id?: string;
  name: string;
  description: string;
  thumbnail: {
    downloadURL: string;
    path: string;
  };
  variants: {
    name: string;
    price: number;
  }[];
}
