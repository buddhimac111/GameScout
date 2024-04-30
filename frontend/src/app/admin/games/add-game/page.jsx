"use client"
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
import Swal from 'sweetalert2';


export default function AddGame() {
   // State to hold form data
   const [formData, setFormData] = useState({
    title: '',
    scrapeTitle: '',
    developer: '',
    publisher: '',
    genres: [],
    description: '',
    wallpaper: null
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        // Add genre to array
        setFormData(prevState => ({
          ...prevState,
          genres: [...prevState.genres, value]
        }));
      } else {
        // Remove genre from array
        setFormData(prevState => ({
          ...prevState,
          genres: prevState.genres.filter(genre => genre !== value)
        }));
      }
    } else if (type === 'file') {
      setFormData(prevState => ({ ...prevState, [name]: e.target.files[0] }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'genres') {
        formData[key].forEach(value => data.append('genres', value));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/scraped-games/add-game-info`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Game added successfully:', response.data);
      setFormData({
        title: '',
        scrapeTitle: '',
        developer: '',
        publisher: '',
        genres: [],
        description: '',
        wallpaper: null
      });
      document.getElementById('gameInfoForm').reset();
      Swal.fire({
        title: "Success!",
        text: "Game added successfully!",
        icon: "success"
      });
    } catch (error) {
      console.error('Failed to add game:', error);
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
      <form id="gameInfoForm" onSubmit={handleSubmit}>
        <p className='text-3xl font-bold mb-10 uppercase'>Add New Game</p>

        <div className='mb-10 block'>
          <Label
            htmlFor='title'
            value='Game Title'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='title'
            name="title"
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            onChange={handleChange}
            placeholder='Enter the Display Title of the Game'
            required
          />
        </div>
        <div className='mb-10 block'>
          <Label
            htmlFor='scrapeTitle'
            value='scrapeTitle'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='scrapeTitle'
            name="scrapeTitle"
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            onChange={handleChange}
            placeholder='Enter the Scrape Title of the game'
            required
            helperText={
              <>
                Scrape title is should be common title to among store beacause
                of that use lowercase and use space between words. Example: alan
                wake, call of duty, etc .
              </>
            }
          />
        </div>
        <div className='mb-10 block'>
          <Label
            htmlFor='developer'
            value='Developer'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='developer'
            name="developer"
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            onChange={handleChange}
            placeholder='Enter the Developer of the game'
            required
          />
        </div>
        <div className='mb-10 block'>
          <Label
            htmlFor='publisher'
            value='Publisher'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='publisher'
            name="publisher"
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            onChange={handleChange}
            placeholder='Enter the Publisher of the game'
            required
          />
        </div>
        <div className='flex flex-col gap-4 mb-10' id='genres'>
          <Label
            htmlFor='genres'
            value='Genres'
            className='text-adminGrey text-md'
          />
          
          <div className='columns-4 space-y-3'>
              <div className='flex items-center gap-2'>
                <Checkbox id='action' name='genres' value='action' onChange={handleChange} />
                <Label htmlFor='action' className='flex text-adminGrey'>Action</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='adventure' name='genres' value='adventure' onChange={handleChange} />
                <Label htmlFor='adventure' className='flex text-adminGrey'>Adventure</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='rpg' name='genres' value='rpg' onChange={handleChange} />
                <Label htmlFor='rpg' className='flex text-adminGrey'>RPG</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='openWorld' name='genres' value='open-world' onChange={handleChange} />
                <Label htmlFor='openWorld' className='flex text-adminGrey'>Open World</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='survival' name='genres' value='survival' onChange={handleChange} />
                <Label htmlFor='survival' className='flex text-adminGrey'>Survival</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='racing' name='genres' value='racing' onChange={handleChange} />
                <Label htmlFor='racing' className='flex text-adminGrey'>Racing</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='horror' name='genres' value='horror' onChange={handleChange} />
                <Label htmlFor='horror' className='flex text-adminGrey'>Horror</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='shooter' name='genres' value='shooter' onChange={handleChange} />
                <Label htmlFor='shooter' className='flex text-adminGrey'>Shooter</Label>
              </div>
              
            </div>
        
        </div>
        <div className='mb-10 block'>
            <Label htmlFor='description' value='Description' className='text-adminGrey text-md' />
            <Textarea id='description' name='description' type='text' style={{ backgroundColor: "transparent", color: "white", marginTop: "10px" }} placeholder='Enter a small description about the game' required rows={3} onChange={handleChange} />
          </div>
          <div className='mb-10 block'>
            <Label htmlFor='wallpaperUpload' value='Wallpaper' className='text-adminGrey text-md' />
            <FileInput id='wallpaperUpload' name='wallpaper' required onChange={handleChange} />
          </div>
          <div className='mb-10 space-x-3'>
            <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-md'>
              Add Game
            </button>
            <button type='reset' onClick={() => setFormData({ title: '', scrapeTitle: '', developer: '', publisher: '', genres: [], description: '', wallpaper: null })} className='bg-slate-500 text-white py-2 px-4 rounded-md'>
              Clear
            </button>
          </div>
          </form>
      </div>
    </main>
  );
}
