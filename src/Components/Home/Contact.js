import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { BiMap, BiMailSend, BiPhone } from 'react-icons/bi';
import { useState } from 'react';

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
      form.current.user_name.value='';
      form.current.user_email.value='';
      form.current.message.value='';
  };
  return (
    <div className='bg-green-300'>
      <div className='flex flex-col md:flex-row justify-center mx-4 py-10'>
        <div className='w-[100%] md:w-[360px] rounded-lg md:rounded-r-none bg-lime-200'>
          <h2 className='text-2xl font-semibold pt-6'>Send Message</h2>
          <form ref={form} onSubmit={sendEmail} className='text-left px-6 py-4'>
            <label>Name</label><br />
            <input type="text" name="user_name" required className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <label>Email</label><br />
            <input type="email" name="user_email" required className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <label>Message</label><br />
            <textarea name="message" rows={3} required className='w-full p-[5px] pl-2 mt-1 mb-3 focus:outline-none rounded' /><br />
            <input className='btn btn-sm' type="submit" value="Send" />
          </form>
        </div>

        <div className='w-[100%] md:w-[360px] rounded-lg md:rounded-l-none mt-8 md:mt-0 bg-red-200 px-6'>
          <h2 className='text-2xl font-semibold pt-6'>Contact Me</h2>
          <p className='text-sm'>Open for any suggestion or have a chat</p>
          <div className='flex items-center pt-8'>
            <BiMap className='text-3xl mr-4'></BiMap>
            <p className='text-left'><span className='font-bold'>Address:</span> Ghatail, Tangail,<br /> Dhaka, Bangladesh</p>
          </div>
          <div className='flex items-center pt-8'>
            <BiMailSend className='text-3xl mr-4'></BiMailSend>
            <p className='text-left'><span className='font-bold'>Email:</span> <a className='hover:underline' href = "mailto: mh.habib137@gmail.com">mh.habib137@gmail.com</a></p>
          </div>
          <div className='flex items-center pt-8'>
            <BiPhone className='text-3xl mr-4'></BiPhone>
            <p className='text-left'><span className='font-bold'>Phone:</span> <a className='hover:underline' href="tel:+8801772046419">+8801772046419</a></p>
          </div>
          <div className='flex items-center justify-center pt-8 pb-6'>
            <a href="#" target="_blank" className='text-4xl mx-2 text-[#4267B2]'><FaFacebookSquare></FaFacebookSquare></a>
            <a href="#" target="_blank" className='text-4xl mx-2 text-[#1DA1F2]'><FaTwitterSquare></FaTwitterSquare></a>
            <a href="#" target="_blank" className='text-4xl mx-2 text-[#0A66C2]'><FaLinkedin></FaLinkedin></a>
            <a href="#" target="_blank" className='text-4xl mx-2 text-[#25D366]'><FaWhatsappSquare></FaWhatsappSquare></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;