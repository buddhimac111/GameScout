"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavAdmin from "@/app/components/NavAdmin";
import Cookies from "js-cookie";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Games() {

  // check admin
  useEffect(() => {
    const token = Cookies.get("token");
    if (token && token.split("-")[1] === "true") {
      setLoading(true);
    } else {
      window.location.href = "/";
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-game-info-all`
        );
        setGames(response.data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect will only run once, after the component mounts

  const filteredProducts = games.filter((games) =>
    games.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function deleteProfile(title, scrapeTitle) {
    Swal.fire({
      title: `Are you sure you want to delete ${title}`,
      text: "You won't be able to revert this and all the data related to this game will be lost!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      icon: "warning",
      width: 600,
      padding: "3em",
      color: "#000000",
      background: "#fff",
      backdrop: `rgba(255, 0, 0, 0.3)`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete profile");
        try {
          axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/delete-game?scrapeTitle=${scrapeTitle}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your profile has been deleted.",
            icon: "success",
          }).then((result) => {
            if (result.value) {
              window.location.href = "/admin/games";
            }
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    });
  }

  return (
    loading && (
      <main>
      <NavAdmin />
      <div className='overflow-x-auto pt-24 md:px-20 px-12'>
        <div className='mb-4 flex justify-between'>
          <input
            type='text'
            className='w-25 py-1 px-2 text-adminGrey rounded-lg bg-transparent'
            placeholder='Search title...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link href='/admin/games/add-game'>
            <Button color='success'>Add New Game</Button>
          </Link>
        </div>
        <Table hoverable>
          <TableHead>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Developer</TableHeadCell>
            <TableHeadCell>Publisher</TableHeadCell>
            <TableHeadCell>Genres</TableHeadCell>
            <TableHeadCell>
              <span className='sr-only'>Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className='divide-y'>
            {filteredProducts.map((games, index) => (
              <TableRow
                key={index}
                className='bg-gray-800 border-gray-600 text-adminGrey hover:bg-gray-600'
              >
                <TableCell>{games.title}</TableCell>
                <TableCell>{games.developer}</TableCell>
                <TableCell>{games.publisher}</TableCell>
                <TableCell className='capitalize'>
                  {games.genres.join(" , ")}
                </TableCell>

                <TableCell className='space-x-5'>
                  <Link
                    href={`/admin/games/edit-game/${games.scrapeTitle}`}
                    className='font-medium text-cyan-500 hover:underline'
                  >
                    Edit
                  </Link>
                  <Link
                    href='#'
                    className='font-medium text-red-500 hover:underline'
                    onClick={() =>
                      deleteProfile(games.title, games.scrapeTitle)
                    }
                  >
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
    )
  );
}
