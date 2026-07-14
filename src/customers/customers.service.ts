import { Injectable } from '@nestjs/common';
import data from '../../data.json';
import { Customer } from './customer.interface';

@Injectable()
export class CustomersService {
  private readonly customersById: Map<string, Customer>;

  constructor() {
    this.customersById = new Map(
      (data as Customer[]).map((customer) => [customer.id, customer]),
    );
  }

  findById(id: string): Customer | undefined {
    return this.customersById.get(id);
  }
}
