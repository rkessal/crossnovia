import React from 'react'

const Title = ({ subtitle, centered, children }) => {
  return (
    <div className={`flex flex-col leading-none uppercase ${centered && 'text-center'}`}>
      <h3 className='text-main text-[1.375rem] tracking-[0.688rem] ml-[0.25rem]'>{subtitle}</h3>
      <h1 className='text-[3.25rem]'>{children}</h1>
    </div>
  )
}

export default Title