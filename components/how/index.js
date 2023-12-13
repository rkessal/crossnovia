import React from 'react'
import Title from '../ui/title'
import Step from '../ui/step'

const How = () => {
  return (
    <section id='how' className='flex flex-col text-center mt-36 lg:text-left'>
      <Title subtitle='what to expect'>how does it work</Title>
      <Step 
        subtitle='Personalized Mental Wellness Enhancement' 
        number='01'>
        Through one-on-one sessions, I will work closely with you to understand your unique needs and challenges related to mental health.
        <br /> <br />
        We&apos;ll develop strategies to manage stress, anxiety, and other emotional concerns.
        <br /> <br />
        By tailoring techniques to your individual circumstances, you&apos;ll gain practical tools to enhance your overall mental well-being, cultivate a sense of meaning, and foster emotional resilience.
      </Step>
      <Step 
        subtitle='Mindful Meditation and Stress Reduction' 
        number='02'>
        Incorporating meditation into your routine can significantly impact your mental clarity and stress levels.
        <br /><br />
        I&apos;ll guide you through various meditation practices, helping you find the techniques that resonate with you the most.
        <br /><br />
        We&apos;ll explore mindfulness, relaxation, and breathing exercises that not only bring moments of calm but also help you discover deeper personal meaning and value in your life.
        </Step>
      <Step 
        subtitle='Personalized Mental Wellness Enhancement' 
        number='03'>
        Creating an exercise routine that suits your lifestyle, preferences, and fitness goals is crucial.
        <br /><br />
        I&apos;ll collaborate with you to design a personalized workout plan that aligns with your physical capabilities and objectives.
        <br /><br />
        Whether you&apos;re a beginner or looking to elevate your current routine, I&apos;ll provide guidance on exercises, intensity, and progression.
        <br /><br />
        This physical journey will also be intertwined with finding purpose and value in taking care of your body.
      </Step>
      <Step 
        subtitle='Cultivating Sustainable Healthy Habits' 
        number='04'>
        Building and sustaining healthy habits can be challenging, but with my guidance, you&apos;ll learn effective strategies to make positive changes that last.
        <br /><br />
        We&apos;ll delve into nutrition, sleep, hydration, and other foundational elements of well-being.
        <br /><br />
        By setting realistic goals and breaking them down into manageable steps, I&apos;ll help you create a roadmap to healthier living that&apos;s both sustainable and rewarding, contributing to a life of meaning and value.
      </Step>
      <Step 
        subtitle='Strategy Implementation and Accountability' 
        number='05'>
        Implementation is key to turning intentions into actions.
        <br /><br />
        Together, we&apos;ll map out actionable strategies and plans to achieve your mental, physical, and emotional well-being goals, while also infusing your life with purpose.
        <br /><br />
        Regular check-ins will keep you on track and motivated as we celebrate successes and navigate any obstacles.
        <br /><br />
        My role as your accountability partner is to ensure you stay committed to a life of value and meaning throughout your transformative journey.
      </Step>
    </section>
  )
}

export default How