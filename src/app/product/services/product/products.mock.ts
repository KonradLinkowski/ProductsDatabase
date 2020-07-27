import { Product } from '../../models/product.model';

export const products: Product[] = [
  {
    id: '0',
    name: 'Potato',
    description: 'Cool looking vegetable',
    thumbnail: '',
    variants: [{
      name: 'Yellow',
      price: 2.30
    }]
  },
  {
    id: '1',
    name: 'Eggplant',
    description: 'Plant with egg fruits',
    thumbnail: '',
    variants: [{
      name: 'Purple',
      price: 5.61
    }]
  },
  {
    id: '2',
    name: 'Tomato',
    description: 'Round, red fruit',
    thumbnail: '',
    variants: [{
      name: 'Red',
      price: 0.30
    }]
  }
];
