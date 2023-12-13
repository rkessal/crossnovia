import Link from 'next/link'

const Button = ({ submit, href, children, fullWidth, ...props }) => {
  const className = `
      ${fullWidth ? 'w-full' : 'min-w-[12rem]'}
       flex justify-center items-center bg-main h-20 px-4 rounded-2xl text-white uppercase
    `

  return (
    <>
      {submit
        ?
        (<button className={className} {...props}>
          {children}
        </button>)
        : (
          <div className='flex shrink-0' >
            <Link className={className} href={href}>
              {children}
            </Link>
          </div>
        )
      }
    </>
  )
}

export default Button