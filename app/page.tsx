'use client'

import { useEffect, useState } from 'react';
import { getMonthlyProducts } from './helpers/getMonthlyProducts';
import { updateProductsForBillingCycle } from './helpers/updateProductsForBillingCycle';
import { BillingCycle } from './types/BillingCycle';
import shortUUID from 'short-uuid';




export default function Home() {

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
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-main-bg-color text-regular-text overflow-x-hidden">
      <section className='pricing-component grid grid-rows-[255px_1fr] items-center justify-center w-screen min-h-screen place-content-center'>
        <div className=" w-[453px] pricing-component-header flex flex-col items-center justify-center">
          <span className='font-bold text-[32px] pb-[40px]'>Our Pricing</span>

          <div className="toggle-area">
            <div className="toggle-wrapper flex gap-[24px] items-center" >
              <span className='font-bold opacity-50'>Annually</span>
              <button 
                className={`theme-toggle-button ${isMonthly ? 'active' : ''}`}
                onClick={toggleMonthly}
              >
                <div className={`toggle-slider ${isMonthly ? 'active' : ''}`} />
              </button>
              <span className='font-bold opacity-50'>Monthly</span>
            </div>
          </div>
        </div>
      
        <div className="cards flex flex-col gap-[32.5px] items-center">
          {products.map((each, index) => (
            <div key={each.id} className={`grid gap-[33px] justify-evenly items-center min-w-[327px] w-[327px] ${index%2===0? "bg-white" : "bg-main-gradient text-white"} h-[453px rounded-md py-[31px] px-[29px]`}>
              <span className='plan-title text-center font-bold'>{each.title}</span>
              <div className='text-center'>
                <span className='plan-title text-[72px] font-bold'>
                  <span className='text-[40px]'>$</span>
                  {isMonthly ? each.price : each.price + "9"}
                </span>
              </div>
              <div className='flex flex-col plan-features font-bold items-center'>
                {each.features.map((feature, index) => (
                  <div className={`border border-gray-400 border-x-0 p-[12px] w-full flex flex-col items-center 
                  ${index %2===0? null : "border-y-0"}`} key={shortUUID.generate()}>{feature}</div>
                ))}
              </div>
              <button className={`uppercase font-bold text-[13px] ${index%2===0? "bg-main-gradient text-white": "bg-white text-[#6E728E]"} py-[14px] rounded-md w-[268px]`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
