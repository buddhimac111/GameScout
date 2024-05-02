import NavBar from "@/app/components/NavBar";
import Image from "next/image";

export default function Recommendations() {
  return (
    <main>
      <NavBar />

      <section
        className='bg-cover bg-center min-h-screen'
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            class='flex items-center mb-6 text-2xl font-semibold text-white'
          >
            <Image
              class='w-8 h-8 mr-2'
              src='/logoGameScout.png'
              alt='Logo'
              width={100}
              height={100}
            />
            GameScout
          </a>
          <div class='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 class='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center'>
                Sign in
              </h1>
              <form class='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-white'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    class='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                    required=''
                  />
                </div>
                <div class='flex items-center justify-between'>
                  <div class='flex items-start'>
                    <div class='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        class='w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800'
                        required=''
                      />
                    </div>
                    <div class='ml-3 text-sm'>
                      <label for='remember' class='text-gray-300'>
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href='#'
                    class='text-sm font-medium text-primary-600 hover:underline text-primary-500'
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type='submit'
                  class='w-full text-white bg-[#6875f5] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'
                >
                  Sign in
                </button>
                <p class='text-sm font-light text-gray-400'>
                  Don’t have an account yet?{" "}
                  <a
                    href='#'
                    class='font-medium text-[#6875f5] hover:underline text-primary-500'
                  >
                    Register now
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
