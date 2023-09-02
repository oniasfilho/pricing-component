import React from 'react'
import shortUUID from 'short-uuid';


type PricingCardProps = {
  plan: Product;
  isMonthly: boolean;
  productIndex: number
};

export default function PricingCard({ plan, isMonthly, productIndex }: PricingCardProps) {
  return (
    <div key={plan.id} className={`grid gap-[33px] justify-evenly items-center min-w-[327px]  ${productIndex % 2 === 0 ? "bg-white" : "bg-main-gradient text-white"} h-[453px rounded-md py-[31px] px-[29px]`}>
      <span className='plan-title text-center font-bold'>{plan.title}</span>
      <div className='text-center'>
        <span className='plan-title text-[72px] font-bold'>
          <span className='text-[40px]'>$</span>
          {isMonthly ? plan.price : plan.price + "9"}
        </span>
      </div>
      <div className='flex flex-col plan-features font-bold items-center w-[273px]'>
        {plan.features.map((feature, index) => (
          <div className={`border border-gray-400 border-x-0 p-[12px] w-full flex flex-col items-center 
                  ${index % 2 === 0 ? null : "border-y-0"}`} key={shortUUID.generate()}>{feature}</div>
        ))}
      </div>
      <button className={`uppercase font-bold text-[13px] ${productIndex % 2 === 0 ? "bg-main-gradient text-white" : "bg-white text-[#6E728E]"} py-[14px] rounded-md w-[268px]`}>
        Learn More
      </button>
    </div>
  )
}
