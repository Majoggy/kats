import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { NextDeliveryResponseDto } from './dto/next-delivery-response.dto';
import { calculateTotalPrice } from './comms.utils';

const FREE_GIFT_THRESHOLD = 120;

@Injectable()
export class CommsService {
  constructor(private readonly customersService: CustomersService) {}

  getNextDelivery(userId: string): NextDeliveryResponseDto {
    const customer = this.customersService.findById(userId);

    if (!customer) {
      throw new NotFoundException(`No customer found with id ${userId}`);
    }

    const activeCats = customer.cats.filter((cat) => cat.subscriptionActive);

    if (activeCats.length === 0) {
      throw new NotFoundException(
        `No active subscriptions for customer with id ${userId}`,
      );
    }

    const totalPrice = calculateTotalPrice(activeCats);

    const formattedCatNames = new Intl.ListFormat('en-GB', {
      style: 'long',
      type: 'conjunction',
    }).format(activeCats.map((cat) => cat.name));

    return {
      title: `Your next delivery for ${formattedCatNames}`,
      message: `Hey ${customer.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
      totalPrice,
      freeGift: totalPrice > FREE_GIFT_THRESHOLD,
    };
  }
}
