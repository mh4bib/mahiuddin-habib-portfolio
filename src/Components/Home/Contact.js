import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qpzu6p', 'template_f34lx5e', form.current, '8dkIPGKO2KXkfux_C')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='bg-green-300'>
      <div className='flex flex-col md:flex-row justify-center mx-4 py-10'>
        <div className='w-[100%] md:w-[360px] bg-lime-200'>
          <h2 className='text-2xl font-semibold pt-6'>Send Message</h2>
          <form ref={form} onSubmit={sendEmail} className='text-left px-6 py-4'>
            <label>Name</label><br />
            <input type="text" name="user_name" className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <label>Email</label><br />
            <input type="email" name="user_email" className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <label>Message</label><br />
            <textarea name="message" rows={30} className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <input className='btn' type="submit" value="Send" />
          </form>
        </div>

        <div className='w-[100%] md:w-[360px] bg-red-200'>
          <h2>Contact Me</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;