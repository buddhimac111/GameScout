"use client";
import { useState } from "react";
import NavAdmin from "@/app/components/NavAdmin";
import {
  Label,
  TextInput,
  FileInput,
  Textarea,
  Checkbox,
} from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddGame() {
  // State to hold form data
  const [formData, setFormData] = useState({
    uniqueTitle: "",
    description: "",
    sliderImage: null,
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({ ...prevState, [name]: e.target.files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/promotions/add-promotion-slider`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Slider successfully:", response.data);
      setFormData({
        uniqueTitle: "",
        description: "",
        sliderImage: null,
      });
      document.getElementById("sliderInfoForm").reset();
      Swal.fire({
        title: "Success!",
        text: "Promotion slider added successfully!",
        icon: "success",
      });
    } catch (error) {
      console.error("Failed to add slider:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Make sure you have filled all the fields",
      });
    }
  };
  return (
    <main>
      <NavAdmin />
      <div className='pt-24 md:px-48 px-12'>
        <form id='sliderInfoForm' onSubmit={handleSubmit}>
          <p className='text-3xl font-bold mb-10 uppercase'>Add Promotion Slider</p>

          <div className='mb-10 block'>
            <Label
              htmlFor='uniqueTitle'
              value='Unique Title'
              className='text-adminGrey text-md'
            />
            <TextInput
              id='uniqueTitle'
              name='uniqueTitle'
              type='text'
              style={{
                backgroundColor: "transparent",
                color: "white",
                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder='Enter the a unique title for identifying the slider'
              required
            />
          </div>
          <div className='mb-10 block'>
            <Label
              htmlFor='description'
              value='Description'
              className='text-adminGrey text-md'
            />
            <TextInput
              id='description'
              name='description'
              type='text'
              style={{
                backgroundColor: "transparent",
                color: "white",
                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder='Enter a small description about the slider'
              required
            />
          </div>
                 
          <div className='mb-10 block'>
            <Label
              htmlFor='sliderImage'
              value='Upload Slider Image'
              className='text-adminGrey text-md'
            />
            <FileInput
              id='sliderImage'
              name='sliderImage'
              required
              onChange={handleChange}
              helperText='Size: 1600 x 400 px | Format: jpg/jpeg/png/webp | Max-Filesize: 2MB'
            />
          </div>
          <div className='mb-10 space-x-3'>
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-4 rounded-md'
            >
              Add Slider
            </button>          
          </div>
        </form>
      </div>
    </main>
  );
}
