import { BillingCycle } from '../types/BillingCycle';

const monthlyProducts: Product[] = [
  {
    id:1,
    title: 'Basic',
    basePrice: 19.99,
    price:0,
    features: ['500gb storage', '2 users allowed', 'send up to 3gb'],
    billingCycle: BillingCycle.Monthly,
  },
  {
    id:2,
    title: 'Professional',
    basePrice: 24.99,
    price:0,
    features: ['1 TB storage', '5 Users Allowed', 'Send up to 10 GB'],
    billingCycle: BillingCycle.Monthly,
  },
  {
    id:3,
    title: 'Master',
    basePrice: 39.99,
    price:0,
    features: ['2 TB storage', '10 Users Allowed', 'Send up to 20 GB'],
    billingCycle: BillingCycle.Monthly,
  },
];

export const getMonthlyProducts = () => {
  return monthlyProducts;
}