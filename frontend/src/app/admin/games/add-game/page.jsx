import NavAdmin from "@/app/components/NavAdmin";
import { Label, TextInput, FileInput } from "flowbite-react";

export default function AddGame() {
  return (
    <main>
      <NavAdmin />
      <div className='pt-24 md:px-48 px-12'>
        <p className='text-3xl font-bold mb-10 uppercase'>Add New Game</p>

        <div className='mb-10 block'>
          <Label
            htmlFor='title'
            value='Game Title'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='title'
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            placeholder='Enter the Display Title of the Game'
            required
          />
        </div>
        <div className='mb-10 block'>
          <Label
            htmlFor='scrape-title'
            value='Scrape Title'
            className='text-adminGrey text-md'
          />
          <TextInput
            id='scrape-title'
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
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
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
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
            type='text'
            style={{
              backgroundColor: "transparent",
              color: "white",
              marginTop: "10px",
            }}
            placeholder='Enter the Publisher of the game'
            required
          />
        </div>
        <div className='mb-10 block'>
          <Label
            htmlFor='wallpaperUpload'
            value='Wallpaper'
            className='text-adminGrey text-md'
          />
          <div className='max-w-md mt-4'>
            <FileInput
              id='wallpaperUpload'
              helperText='A wallpaper for the game to be displayed on the website'
              required
            />
          </div>
        </div>
      </div>
    </main>
  );
}
