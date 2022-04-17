import { TestBed } from '@angular/core/testing';

import { ProductsSaleResolverService } from './products-sale-resolver.service';

describe('ProductsSaleResolverService', () => {
  let service: ProductsSaleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsSaleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
