"use client"
import { useState, useEffect } from "react";
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


export default function EditGame({ params}) {

  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const cleanSlug = decodedSlug.replace(/\s+/g, " ");

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

  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/scraped-games/get-game-info-single?scrapeTitle=${cleanSlug}`
        );
        setGame(response.data[0]);
        setFormData({
          title: response.data[0].title,
          scrapeTitle: response.data[0].scrapeTitle,
          developer: response.data[0].developer,
          publisher: response.data[0].publisher,
          genres: response.data[0].genres,
          description: response.data[0].description,
          wallpaper: null // Assuming you don't fetch wallpaper files
        });
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGame();
  }, []);


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
      // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/scraped-games/edit-game-info`, data, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
      // console.log('Game updated successfully:', response.data);
      // setFormData({
      //   title: '',
      //   scrapeTitle: '',
      //   developer: '',
      //   publisher: '',
      //   genres: [],
      //   description: '',
      //   wallpaper: null
      // });
      document.getElementById('gameInfoForm').reset();
      Swal.fire({
        title: "Success!",
        text: "Game Updated successfully!",
        icon: "success"
      }).then((result) => {
        if (result.value) {
          window.location.href = "/admin/games";
        }
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
        <p className='text-3xl font-bold mb-10 uppercase'>Edit Game</p>

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
            value={formData.title}
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
            value={formData.scrapeTitle}
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
            value={formData.developer}
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
            value={formData.publisher}
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
                <Checkbox id='action' name='genres' value='action' onChange={handleChange}  checked={formData.genres.includes('action')} />
                <Label htmlFor='action' className='flex text-adminGrey'>Action</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='adventure' name='genres' value='adventure' onChange={handleChange} checked={formData.genres.includes('adventure')}/>
                <Label htmlFor='adventure' className='flex text-adminGrey'>Adventure</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='rpg' name='genres' value='rpg' onChange={handleChange} checked={formData.genres.includes('rpg')}/>
                <Label htmlFor='rpg' className='flex text-adminGrey'>RPG</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='openWorld' name='genres' value='open-world' onChange={handleChange} checked={formData.genres.includes('open-world')} />
                <Label htmlFor='openWorld' className='flex text-adminGrey'>Open World</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='survival' name='genres' value='survival' onChange={handleChange} checked={formData.genres.includes('survival')} />
                <Label htmlFor='survival' className='flex text-adminGrey'>Survival</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='racing' name='genres' value='racing' onChange={handleChange} checked={formData.genres.includes('racing')}/>
                <Label htmlFor='racing' className='flex text-adminGrey'>Racing</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='horror' name='genres' value='horror' onChange={handleChange} checked={formData.genres.includes('horror')}/>
                <Label htmlFor='horror' className='flex text-adminGrey'>Horror</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='shooter' name='genres' value='shooter' onChange={handleChange} checked={formData.genres.includes('shooter')}/>
                <Label htmlFor='shooter' className='flex text-adminGrey'>Shooter</Label>
              </div>
              
            </div>
        
        </div>
        <div className='mb-10 block'>
            <Label htmlFor='description' value='Description' className='text-adminGrey text-md' />
            <Textarea id='description' name='description' type='text' style={{ backgroundColor: "transparent", color: "white", marginTop: "10px" }} placeholder='Enter a small description about the game' required rows={3} onChange={handleChange} value={formData.description} />
          </div>
          <div className='mb-10 block'>
            <Label htmlFor='wallpaperUpload' value='Change Wallpaper' className='text-adminGrey text-md' />
            <FileInput id='wallpaperUpload' name='wallpaper' onChange={handleChange}  helperText={
              <>
                Upload a new wallpaper for the game. If you don't want to change the wallpaper, leave this field empty.
              </>
            } />
          </div>
          <div className='mb-10 space-x-3'>
            <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-md'>
              Edit Game
            </button>
           
          </div>
          </form>
      </div>
    </main>
  );
}
