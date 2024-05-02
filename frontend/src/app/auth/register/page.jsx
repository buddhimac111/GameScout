"use client";

import NavBar from "@/app/components/NavBar";;
import axios from "axios";
import Swal from "sweetalert2";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function Recommendations() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const formData = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target["confirm-password"].value,
      termsAndConditions: event.target.terms.checked,
    };

    let response;

    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/add-user`,
        formData
      );

      Swal.fire({
        title: "Success!",
        text: "User registered successfully!",
        icon: "success",
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
      <section
        className='bg-cover bg-center min-h-screen'
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:pt-24'>
          <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center'>
                Register
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={handleSubmit}
              >
                <div className='flex space-x-3'>
                  <div>
                    <label
                      htmlFor='fname'
                      className='block mb-2 text-sm font-medium text-white'
                    >
                      First Name
                    </label>
                    <input
                      type='fname'
                      name='fname'
                      id='fname'
                      className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                      placeholder='John'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lname'
                      className='block mb-2 text-sm font-medium text-white'
                    >
                      Last Name
                    </label>
                    <input
                      type='lname'
                      name='lname'
                      id='lname'
                      className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                      placeholder='Doe'
                      required
                    />
                  </div>
                </div>
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
                    required
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
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-white'
                  >
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    required
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='terms'
                        aria-describedby='terms'
                        type='checkbox'
                        className='w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800'
                        required
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='terms'
                        className='font-light text-gray-300'
                      >
                        I accept the{" "}
                        <a
                          className='font-medium hover:underline text-primary-500'
                          href='#'
                        >
                          Terms and Conditions
                        </a>
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
                  Register
                </button>
                <p className='text-sm font-light text-gray-400'>
                  Alredy have an account?{" "}
                  <a
                    href='#'
                    className='font-medium text-[#6875f5] hover:underline text-primary-500'
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
