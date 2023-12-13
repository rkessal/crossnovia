import Link from 'next/link'
import React, { useState } from 'react'
import Button from '@/components/ui/button'
import CloseIcon from '../ui/close-icon'

const links = [
  {
    label: 'About',
    link: '#about'
  },
  {
    label: 'How does it work',
    link: '#how'
  },
  {
    label: 'What\'s inside',
    link: '#packages'
  },
  {
    label: 'Contact',
    link: '#contact'
  },
  {
    label: 'CanbeByX',
    link: 'https://canbebyx.com'
  },
]

const Navbar = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <div id='top' className='flex flex-row mt-4'>
      <nav className='flex flex-row items-center justify-between flex-1 order-2 h-20 ml-4 lg:mr-4 bg-secondary rounded-2xl'>
        <div className='ml-4 text-xl font-bold lg:text-3xl'>CROSSNOVIA</div>
        <ul className='flex-row items-center justify-center hidden gap-4 mr-4 text-lg font-medium lg:flex'>
          {links.map(({label, link}) => 
            <li key={label}><Link href={link}>{label}</Link></li> 
          )}
        </ul>
        <div className='mr-4 font-medium cursor-pointer lg:hidden' onClick={() => toggleMenu(prev => !prev)}>MENU</div>
        {
          menu && (
            <div className='fixed top-0 left-0 right-0 z-10 flex items-center h-full pl-10 bg-main'>
              <CloseIcon onClick={() => toggleMenu(prev => !prev)} className='absolute cursor-pointer top-5 right-5 opacity-60 hover:opacity-100' />
              <ul className='text-6xl font-bold text-white uppercase'>
                {
                  links.map(({label, link}) =>
                    <li key={label} onClick={() => toggleMenu(false)} className='mb-5 opacity-60 hover:opacity-100 last:mb-0'>
                      <Link href={link}>{label}</Link>
                    </li> 
                  )
                }
              </ul>
            </div>
          )
        }
      </nav>
      <div className='lg:order-2'>
        <Button href='#'>Apply Now</Button>
</div>
    </div>
  )
}

export default Navbar