import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/customer.interface';
import { CommsService } from './comms.service';

describe('CommsService', () => {
  let service: CommsService;
  let customersService: { findById: jest.Mock };

  const customer: Customer = {
    id: 'ff535484-6880-4653-b06e-89983ecf4ed5',
    firstName: 'Kayleigh',
    lastName: 'Wilderman',
    email: 'Kayleigh_Wilderman@hotmail.com',
    cats: [
      {
        name: 'Dorian',
        subscriptionActive: true,
        breed: 'Thai',
        pouchSize: 'C',
      },
      {
        name: 'Ocie',
        subscriptionActive: true,
        breed: 'Somali',
        pouchSize: 'F',
      },
      {
        name: 'Eldridge',
        subscriptionActive: false,
        breed: 'Himalayan',
        pouchSize: 'A',
      },
    ],
  };

  beforeEach(async () => {
    customersService = { findById: jest.fn() };

    const moduleRef = await Test.createTestingModule({
      providers: [
        CommsService,
        { provide: CustomersService, useValue: customersService },
      ],
    }).compile();

    service = moduleRef.get(CommsService);
  });

  it('builds the next delivery payload', () => {
    customersService.findById.mockReturnValue(customer);

    expect(service.getNextDelivery(customer.id)).toEqual({
      title: 'Your next delivery for Dorian and Ocie',
      message:
        "Hey Kayleigh! In two days' time, we'll be charging you for your next order for Dorian and Ocie's fresh food.",
      totalPrice: 134,
      freeGift: true,
    });
  });

  it('throws NotFoundException when the customer does not exist', () => {
    customersService.findById.mockReturnValue(undefined);

    expect(() => service.getNextDelivery('unknown-id')).toThrow(
      NotFoundException,
    );
  });

  it('throws NotFoundException when the customer has no active subscriptions', () => {
    customersService.findById.mockReturnValue({
      ...customer,
      cats: customer.cats.map((cat) => ({
        ...cat,
        subscriptionActive: false,
      })),
    });

    expect(() => service.getNextDelivery(customer.id)).toThrow(
      NotFoundException,
    );
  });
});
