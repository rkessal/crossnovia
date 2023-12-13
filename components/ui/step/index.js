import React from 'react'

const Step = ({number, subtitle, children}) => {
  return (
    <section className='text-left self-center relative max-w-[67.375rem] w-full my-10 lg:my-32'>
      <div className='flex-row items-center hidden lg:flex lg:absolute lg:-top-36 lg:-left-16'>
        <span className='font-medium text-[12.375rem] w-[15.625rem] mr-[2.1rem]'>{number}</span>
        <h4 className='text-main text-lg lg:tracking-[0.5625rem] uppercase mb-10'>{subtitle}</h4>
      </div>
      <article className='flex flex-col items-center justify-center px-5 bg-secondary rounded-3xl lg:px-0'>
        <div className='max-w-[39.6875rem] w-full py-8 lg:py-[6.12rem]'>
          <h4 className='lg:hidden text-main text-lg lg:tracking-[0.5625rem] uppercase mb-5'>{subtitle}</h4>
          <p>{children}</p>
        </div>
      </article>
    </section>
  )
}

export default Step