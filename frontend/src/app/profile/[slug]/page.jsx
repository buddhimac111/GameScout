"use client";

import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteUserBtn from "@/app/components/DeleteUserBtn";

// Modal Component
function EditUserModal({ userInfo, onClose, refreshUserInfo }) {
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [email, setEmail] = useState(userInfo.email);

  const handleSave = async () => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/update-user`, {
        UserId: userInfo.UserId,
        firstName,
        lastName,
        email,
      });
      refreshUserInfo();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-red-700"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default function Profile({ params }) {
  const { slug } = params;
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/get-single-user?UserId=${slug}`
      );
      setUserInfo(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [slug]);

  if (!userInfo) return <p>Loading...</p>;

  return (
    <main>
      <NavBar />

      <div className='pt-32'>
        <div className='flex px-36'>
          <Image
            width={200}
            height={200}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/profiles/${userInfo.profilePicture}`}
            className='rounded-full'
            alt='Profile-Image'
          />
          <div className='pt-5 pl-10 w-full'>
            <p className='text-5xl font-semibold'>
              {userInfo.firstName} {userInfo.lastName}
            </p>
            <p className='text-xl font-medium pt-4 text-slate-300'>
              {userInfo.email}
            </p>
            <p className='text-md font-normal pt-6 text-slate-400'>
              Joined : {userInfo.joinDate}
            </p>
          </div>
          <div className="w-full text-right space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className='bg-slate-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-adminGrey'
            >
              Edit
            </button>
            <DeleteUserBtn UserId={slug} />
          </div>
        </div>
        <hr className='border-2 border-adminGrey mx-32 mt-10' />
        <div></div>
      </div>

      {showModal && (
        <EditUserModal
          userInfo={userInfo}
          onClose={() => setShowModal(false)}
          refreshUserInfo={fetchUserInfo}
        />
      )}
    </main>
  );
}
