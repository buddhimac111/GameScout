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

export default function Promotions() {
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
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/contacts/get-all-contact-forms`
        );
        setMessages(response.data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Failed to fetch sliders:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect will only run once, after the component mounts

  const filteredProducts = messages.filter((message) =>
    message.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function deleteProfile(id,title) {
    Swal.fire({
      title: `Are you sure you want to delete ${title}`,
      text: "You won't be able to revert this agin!",
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
        console.log("Delete slider");
        try {
          axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/contacts/get-single-contact-form?id=${id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Promotion slider has been deleted successfully!.",
            icon: "success",
          }).then((result) => {
            if (result.value) {
              window.location.href = "/admin/promotions";
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
            placeholder='Search email...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Table hoverable>
          <TableHead>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>subject</TableHeadCell>
            <TableHeadCell>description</TableHeadCell>
          </TableHead>
          <TableBody className='divide-y'>
            {filteredProducts.map((message, index) => (
              <TableRow
                key={index}
                className='bg-gray-800 border-gray-600 text-adminGrey hover:bg-gray-600'
              >
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.message}</TableCell>

                <TableCell className='space-x-5'>
                <a
                    href={`mailto:${message.email}`}
                    className='font-medium text-cyan-400 hover:underline'
                  >
                    Reply
                  </a>
                  <Link
                    href='#'
                    className='font-medium text-red-500 hover:underline'
                    onClick={() =>
                      deleteProfile(message._id, message.email)
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
