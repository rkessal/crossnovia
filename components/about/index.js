import { useState } from 'react'
import Title from '../ui/title'

const ABOUT_VIDEO_URL = 'https://video.wixstatic.com/video/a30514_84bcb9e9c9a84e298f2b9fd3a8ddf421/1080p/mp4/file.mp4'

const About = () => {
  const [isMuted, setMuted] = useState(true)
  return (
    <section id='about' className='flex flex-col items-center text-center lg:flex-row lg:text-left'>
      <figure className='max-w-[32.75rem] mb-16 lg:mb-0 w-full overflow-hidden rounded-3xl lg:mr-[8.625rem]'>
        <video autoPlay loop onClick={() => setMuted(prev => !prev)} muted={isMuted}>
          <source src={ABOUT_VIDEO_URL} type='video/mp4' />
        </video>
      </figure>
      <article className='max-w-[32.75rem] w-full'>
      <Title subtitle='who am i'>CROSS NOVIA</Title>
      <p className='text-lg mt-[2.75rem]'>
          Welcome, I&apos;m Cross – a dedicated advocate for personal development and mental well-being.
          With a professional background as a Registered Nurse specializing in holistic health, I&apos;m passionate about guiding individuals on their paths to positive transformation.
          <br /><br />
          Whether you&apos;re grappling with anxiety, depression, or the feeling of being trapped in life&apos;s complexities, I&apos;m here to be your compass on the journey of self-discovery and personal growth. Together, we&apos;ll forge a path towards cultivating a life that&apos;s not only happier and healthier, but also deeply fulfilling.
          <br /><br />
          Through a blend of expertise, empathy, and a holistic approach, I&apos;m committed to helping you overcome obstacles and unlock your full potential. Explore the buttons below to learn more about the transformative services I offer and how we can collaborate to reshape your life.
      </p>
      </article>
    </section>
  )
}

export default About