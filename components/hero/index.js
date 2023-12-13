import Image from 'next/image'
import Button from '../ui/button'

const Hero = () => {
  return (
    <section id='hero' className='mb-24 text-center lg:text-left mt-36'>
      <h1 className='text-center lg:text-left font-bold text-[5.124rem] leading-[4.25rem] max-w-[53rem] w-full mb-14'>YOUR COMPASS ON THE JOURNEY OF SELF-DISCOVERY</h1>
      <h4>
        Advocate for <span className='text-main'>Personal Development</span>  and <span className='text-main'>Mental Well-Being</span>
      </h4>
      <article className='flex flex-col lg:flex-row my-36 '>
        <div className='uppercase text-6xl mb-16 lg:mb-0 lg:mr-48 lg:max-w-[27.375rem] w-full'>
          <h2>LIFE CAN GET</h2>
          <span className='font-bold text-main'>OVERWHELMING</span>
        </div>
        <div className='flex flex-col items-center w-full mx-auto text-lg font-medium lg:items-start lg:pl-6 lg:border-l-2 border-main'>
          <p className='mb-16'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br/><br/>
            Cras in lectus at mauris luctus finibus id id dolor.
            <br />
            Nunc pretium sapien sit amet lacus lacinia volutpat.
            <br/><br/>
            In eu tellus ut enim interdum gravida.
            <br/><br/>
            Morbi ornare dapibus luctus.
            <br/><br/>
            In tortor diam, maximus tempus elit ut, vestibulum tincidunt mi.
          </p>
          <Button href='#'>Read More</Button>
        </div>
      </article>
      <figure className='hidden overflow-hidden lg:block rounded-3xl'>
        <Image width={1920} height={1080} alt='cross in the rain' src='/cross-rain.jpg' />
      </figure>
    </section>
  )
}

export default Hero