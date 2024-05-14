"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Swal from "sweetalert2";
import iziToast from "izitoast";
import { Button } from "flowbite-react";
import axios from "axios";

export default function ContactUs() {

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const formData = {
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    let response;

    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contacts/save-contact-form`,
        formData
      );

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully to the admins, we will get back to you soon by email",
        icon: "success",
      }).then((result) => {
        if (result.value) {
          window.location.href = "/contact-us"; 
        }
      });

    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error.response.data,
      });
    }
  };
  return (
    <main>
      <NavBar />
      <div className='pt-32 md:flex px-48 space-x-14'>
        <div className='w-[60%]'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>
            Stay in touch with us
          </h2>
          <p className='mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md'>
            Got a technical issue? Want to send feedback about feature? Need
            details about something? Let us know.
          </p>
          <form className='space-y-8' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                name="email"
                className='block p-3 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-adminGrey focus:ring-indigo-500'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-white'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name="subject"
                className='block p-3 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-adminGrey focus:ring-indigo-500'
                placeholder='Let us know how we can help you'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-white'
              >
                Message
              </label>
              <textarea
                id='message'
                name="message"
                rows='6'
                className='block p-2.5 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-adminGrey focus:ring-indigo-500'
                placeholder='Leave your message...'
                required
              ></textarea>
            </div>
              <Button color='blue' type="submit">Send</Button>          
          </form>
        </div>
        <div>
          <Image
            className='rounded-xl'
            src='/contact.png'
            width={425}
            height={450}
          />
        </div>
      </div>
    </main>
  );
}
