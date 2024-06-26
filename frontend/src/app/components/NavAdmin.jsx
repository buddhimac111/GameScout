"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCog } from "react-icons/fa";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavAdmin() {
  const pathName = usePathname();
  const activeClass =
    "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-white";
  const inActiveClass =
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const activeMobileClass =
    "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700";
  const inActiveMobileClass =
    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800";

  function handleSignOut() {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to sign out from admin account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sign out",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        window.location.href = "/";
      }
    });
  }

  return (
    <Disclosure
      as='nav'
      className='bg-primeblue shadow-sm-light fixed z-50 w-full'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex px-2 lg:px-0'>
                <div className='flex flex-shrink-0 items-center'>
                  <a href='/'>
                    <Image
                      src='/logoGameScout.png'
                      className='block w-11 h-11 lg:hidden'
                      alt='GameScout'
                      width={100}
                      height={100}
                    />
                    <Image
                      src='/logoGameScout.png'
                      className='hidden w-11 h-11 lg:block'
                      alt='GameScout'
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
                <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href='/admin/games'
                    className={
                      pathName.startsWith("/admin/games")
                        ? activeClass
                        : inActiveClass
                    }
                  >
                    Games
                  </Link>
                  <Link
                    href='/admin/promotions'
                    className={
                      pathName.startsWith("/admin/promotions")
                        ? activeClass
                        : inActiveClass
                    }
                  >
                    Promotions
                  </Link> 
                  <Link
                    href='/admin/messages'
                    className={
                      pathName.startsWith("/admin/messages")
                        ? activeClass
                        : inActiveClass
                    }
                  >
                    Messages
                  </Link>
                </div>
              </div>
              <div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
                <p>Admin #001</p>
              </div>
              <div className='flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='hidden lg:ml-4 lg:flex lg:items-center'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative flex-shrink-0'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <FaUserCog className='w-6 h-6' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={handleSignOut}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as='a'
                href='/admin/dashboard'
                className={
                  pathName === "/admin/dashboard"
                    ? activeMobileClass
                    : inActiveMobileClass
                }
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/admin/games'
                className={
                  pathName === "/admin/games"
                    ? activeMobileClass
                    : inActiveMobileClass
                }
              >
                Games
              </Disclosure.Button>
            </div>
            <div className='border-t border-gray-200 pt-4 pb-3'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1'>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
