import React from 'react'

import { useEffect, useState } from 'react';
import { getMonthlyProducts } from '../helpers/getMonthlyProducts';
import { updateProductsForBillingCycle } from '../helpers/updateProductsForBillingCycle';
import { BillingCycle } from '../types/BillingCycle';
import PricingCard from './PricingCard';

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [products, setProducts] = useState<Product[]>(getMonthlyProducts);

  const toggleMonthly = () => {
    setIsMonthly(!isMonthly);
  };

  useEffect(() => {
    const currentCycle = isMonthly ? BillingCycle.Monthly : BillingCycle.Annual;
    const newProducts = updateProductsForBillingCycle(products, currentCycle);
    setProducts(newProducts);
  }, [isMonthly])

  return (
    <section className='pricing-component grid grid-rows-[255px_1fr] items-center justify-center w-screen min-h-screen place-content-center'>
      <div className=" w-full pricing-component-header flex flex-col items-center justify-center">
        <h1 className='font-bold text-[32px] pb-[40px]'>Our Pricing</h1>

        <div className="toggle-area">
          <div className="toggle-wrapper flex gap-[24px] items-center" >
            <span className='font-bold opacity-50'>Annually</span>
            <button
              role="switch"
              aria-label="Toggle between monthly and annual billing"
              aria-checked={isMonthly}
              className={`theme-toggle-button ${isMonthly ? 'active' : ''}`}
              onClick={toggleMonthly}
            >
              <div className={`toggle-slider ${isMonthly ? 'active' : ''}`} />
            </button>
            <span className='font-bold opacity-50'>Monthly</span>
          </div>
        </div>
      </div>

      <div className="cards flex flex-col lg:flex-row gap-[32.5px] items-center">
        {products.map((each, index) => (
          <PricingCard plan={each} isMonthly={isMonthly} productIndex={index} />
        ))}
      </div>
    </section>
  )
}
