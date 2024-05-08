"use client";

import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

export default function DeleteUserBtn(params) {
  function deleteProfile() {
    Swal.fire({
      title: "Are you sure you want to delete your profile?",
      text: "You won't be able to revert this and all your data will be lost!",
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
            `${process.env.NEXT_PUBLIC_API_URL}/users/delete-user?UserId=${params.UserId}`
          );
          Cookies.remove("token");
          Swal.fire({
            title: "Deleted!",
            text: "Your profile has been deleted.",
            icon: "success",
          }).then((result) => {
            if (result.value) {
              window.location.href = "/";
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
    <>
      <button
        className='bg-slate-500 text-white font-semibold rounded-lg px-4 py-3 hover:bg-red-500'
        onClick={deleteProfile}
      >
        <FaTrashAlt />
      </button>
    </>
  );
}
