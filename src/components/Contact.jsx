import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#ffff] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/b53e6f6e-cf93-4d92-b9eb-e4c64bdcade0" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#D0E1F9] text-black'>Contact</p>
          <p className='text-black py-4'>Submit the form below or send me an email - bablessings@gmail.com</p>
        </div>
        <input className='bg-[#f754] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#f754]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#f754] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-black border-2 hover:bg-[#4D648D] hover:border-[#D0E1F9] px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
    </div>
  )
}

export default Contact