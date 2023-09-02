import { BillingCycle } from '../types/BillingCycle';


export const updateProductsForBillingCycle = (products: Product[], cycle: BillingCycle): Product[] => {
  return products.map(product => {
    const updatedPrice = cycle === BillingCycle.Annual ? parseFloat((product.basePrice * 10).toFixed(2)) : product.basePrice;
    return {
      ...product,
      price: updatedPrice,
      billingCycle: cycle,
    };
  });
};
