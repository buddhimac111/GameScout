"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Search(params) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch data from an API
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/search-games?searchTerm=${searchTerm}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  // Effect to handle changes in searchTerm
  useEffect(() => {
    if (searchTerm) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [searchTerm]);
  return (
    <>
      <div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
        <div className='w-full max-w-lg lg:max-w-xs'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <MagnifyingGlassIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>
            <input
              id='search'
              name='search'
              className='block w-full text-white rounded-md border border-gray-300 bg-transparent py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
              placeholder='Search'
              type='search'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm.length > 0 && (
            <div className='mt-3 w-80 absolute'>
              <div className='bg-primeblue rounded-md border-2 border-indigo-500'>
                {isLoading ? (
                  <p className='text-gray-700'>Loading...</p>
                ) : results.length > 0 ? (
                  results.map((item, index) => (
                    <Link key={index} href={`/view-game/${item.scrapeTitle}`}>
                      <div className='space-y-2 hover:bg-adminGrey'>
                        <p className='text-white p-3 hover:text-black'>
                          {item.title}
                        </p>
                        <hr />
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className='text-adminGrey p-3'>No results found</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
