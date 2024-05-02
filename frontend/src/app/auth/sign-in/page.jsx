"use client";

import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    let response;

    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/log-user`,
        formData
      );

      if (response.data === "invalid-email") {
        iziToast.error({
          title: "Error",
          message: "Invalid email",
        });
      } else if (response.data === "invalid-password") {
        iziToast.error({
          title: "Error",
          message: "Invalid password",
        });
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: error,
      });
    }
  };
  return (
    <main>
      <NavBar />

      <section
        className='bg-cover bg-center min-h-screen'
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:pt-10'>
          <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center'>
                Sign in
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-white'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    required=''
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800'
                        required=''
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='remember' className='text-gray-300'>
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href='#'
                    className='text-sm font-medium text-primary-600 hover:underline text-primary-500'
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-[#6875f5] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'
                >
                  Sign in
                </button>
                <p className='text-sm font-light text-gray-400'>
                  Don’t have an account yet?{" "}
                  <Link
                    href='/auth/register'
                    className='font-medium text-[#6875f5] hover:underline text-primary-500'
                  >
                    Register now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
