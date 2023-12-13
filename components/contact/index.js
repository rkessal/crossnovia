import Image from 'next/image'
import React, { useState } from 'react'
import Title from '../ui/title'
import Button from '../ui/button'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    resetForm()
  }

  return (
    <section id='contact' className='flex flex-col items-center justify-center text-center lg:flex-row mt-36 lg:text-left'>
      <figure className='lg:mr-[8.56rem] mb-16 lg:mb-0 max-w-[32.75rem] w-full rounded-2xl overflow-hidden'>
        <Image width={524} height={777} src='/cross-sitting.jpg' alt='Cross sitting on a rock' />
      </figure>
      <div>
        <Title subtitle='contact me'>
          Let&apos;s work together
        </Title>
        <form className='flex flex-col items-center lg:items-start mt-9' onSubmit={onSubmit}>
          <Input label='name' placeholder='John Doe' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          <Input label='email' placeholder='john@doe.com' name='name' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input textarea label='message' placeholder='Hey, I would like to know more about...' name='name' value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button submit>send it</Button>
        </form>
      </div>
    </section>
  )
}

const Input = ({ label, name, textarea, ...props }) => {
  const className = 'p-6 rounded-2xl bg-secondary placeholder:opacity-50'
  return (
  <div className='flex flex-col w-full mb-6 text-base text-left'>
    <label id='name' className='capitalize'>{label}</label>
    {textarea
      ? (
        <textarea rows={4} className={`${className} max-h-60 min-h-[6rem]`} {...props} />
      )
      : (
        <input className={className} {...props} />
      )}
  </div>
)}


export default Contact