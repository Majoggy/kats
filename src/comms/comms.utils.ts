import { Cat, PouchSize } from '../customers/customer.interface';

export const POUCH_SIZE_PRICES: Record<PouchSize, number> = {
  A: 55.5,
  B: 59.5,
  C: 62.75,
  D: 66.0,
  E: 69.0,
  F: 71.25,
};

export function calculateTotalPrice(cats: Cat[]): number {
  const total = cats
    .filter((cat) => cat.subscriptionActive)
    .reduce((sum, cat) => sum + POUCH_SIZE_PRICES[cat.pouchSize], 0);

  return Math.round(total * 100) / 100;
}
