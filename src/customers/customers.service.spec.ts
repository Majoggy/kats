import { Test } from '@nestjs/testing';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [CustomersService],
    }).compile();

    service = moduleRef.get(CustomersService);
  });

  it('finds a customer that exists in data.json', () => {
    // First entry in the data fixture.
    const customer = service.findById('618f4ed6-1c5b-4993-a149-f64700bf31dd');
    expect(customer?.firstName).toBe('Cordell');
  });

  it('returns undefined for an unknown id', () => {
    expect(
      service.findById('00000000-0000-0000-0000-000000000000'),
    ).toBeUndefined();
  });
});
