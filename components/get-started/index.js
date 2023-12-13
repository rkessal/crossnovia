import Image from 'next/image'
import Button from '../ui/button'
import Title from '../ui/title'

const GetStarted = () => {
  return (
    <section id='getstarted' className='flex flex-col items-center text-center lg:text-left lg:flex-row mt-36'>
      <article className='flex flex-col items-center lg:items-start lg:max-w-[32.625rem] w-full lg:mr-[8.81rem] mb-16'>
        <Title subtitle='you are ready'>
          Let&apos;s get started
        </Title>
        <p className='lg:max-w-[27.5625rem] w-full mt-11 text-lg mb-[3.88rem]'>
          With my coaching services, you&apos;ll experience a holistic approach that combines mental health support, meditation guidance, tailored exercise routines, habit-building techniques, and a focus on creating meaning and value in your life. Lets get started!
        </p>
        <Button href='#'>Apply now</Button>
      </article>
      <article>
        <figure className='hidden lg:block max-h-[35.125rem] rounded-2xl overflow-hidden'>
          <Image width={1920} height={1080} src='/cross-fall.jpg' alt='Cross facing a waterfall'/>
        </figure>
      </article>
    </section>
  )
}

export default GetStarted