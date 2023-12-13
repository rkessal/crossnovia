import Button from '../ui/button'
import Title from '../ui/title'
import Tick from '../ui/tick'

const packagesDetails = [
  {
    number: '01',
    title: 'Personal Growth Journey',
    weeks: 4,
    price: 495.99,
    benefits: [
      'Weekly 30-minute coaching sessions',
      '4 calls',
      'Strategies and Plans',
      '2 check ins per week',
    ]
  },
  {
    number: '02',
    title: 'Transformative Change',
    weeks: 8,
    price: 849.99,
    benefits: [
      'Weekly 30-minute coaching sessions',
      '8 calls',
      'Strategies and Plans',
      '3 check ins per week'
    ]
  },
  {
    number: '03',
    title: 'Total Transformation',
    weeks: 12,
    price: 1295.99,
    benefits: [
      'Weekly 45-minute coaching sessions',
      '12 calls',
      '24/7 Access to Texting',
      'Full Accountability',
    ]
  },
]

const Packages = () => {
  return (
    <section id='packages' className='flex flex-col items-center justify-center mt-36'>
      <Title subtitle='your choice' centered>
        what&apos;s inside
      </Title>
      <div className='flex flex-col items-center justify-between w-full mt-24 lg:flex-row'>
        {packagesDetails.map(p => (
          <Package key={p.number} {...p} />
        ))}
      </div>
    </section>
  )
}

const Package = ({
  number,
  title,
  weeks,
  price,
  benefits
}) => (
  <article className='relative mb-16 lg:mb-0 bg-secondary overflow-hidden rounded-2xl max-w-[25.8125rem] w-full py-6 px-11'>
    <span className='absolute -top-[3rem] -left-[3.5rem] block opacity-10 text-[12.625rem] text-main'>
      {number}
    </span>
    <div className='mb-7 text-[1.375rem] mt-[7.06rem]'>
      <h2>{title}</h2>
      <h3>({weeks} weeks)</h3>
    </div>
    <span className='font-medium text-[2.625rem] mb-5 block'>${price} CAD</span>
    <ul className='opacity-70 mb-7'>
      {benefits.map((b, index) => (
        <li className='flex flex-row items-center gap-3' key={index}>
          <Tick /> {b}
        </li>
      ))}
    </ul>
    <Button fullWidth href='#'>apply now</Button>
  </article>
)

export default Packages