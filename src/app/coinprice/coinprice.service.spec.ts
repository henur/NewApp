import { TestBed } from '@angular/core/testing';

import { CoinpriceService } from './coinprice.service';

describe('CoinpriceService', () => {
  let service: CoinpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
