import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import DeleteUserBtn from "@/app/components/deleteUserBtn";

export default async function Profile({ params }) {

  const { slug } = params;
  let userInfo;

  try {
    userInfo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/get-single-user?UserId=${slug}`
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <main>
      <NavBar />

      <div className='pt-32'>
        <div className='flex px-36'>
          <Image
            width={200}
            height={200}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/profiles/${userInfo.data[0].profilePicture}`}
            className='rounded-full'
            alt='Profile-Image'
          />
          <div className='pt-5 pl-10 w-full'>
            <p className='text-5xl font-semibold'>
              {userInfo.data[0].firstName} {userInfo.data[0].lastName}
            </p>
            <p className='text-xl font-medium pt-4 text-slate-300'>
              {userInfo.data[0].email}
            </p>
            <p className='text-md font-normal pt-6 text-slate-400'>
              Joined : {userInfo.data[0].joinDate}
            </p>
          </div>
          <div className="w-full text-right space-x-4">
            <button className='bg-slate-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-adminGrey'>
              Edit
            </button>
            <DeleteUserBtn UserId = {slug}/>
          </div>
        </div>
        <hr className='border-2 border-adminGrey mx-32 mt-10' />
        <div></div>
      </div>
    </main>
  );
}
