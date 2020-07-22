import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  beforeEach(() => service = new ProductService());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
