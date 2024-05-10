"use client";

import Cookies from "js-cookie";
import axios from "axios";

export default function MetaRecoder(params) {

  if (Cookies.get("token") === undefined) {
    return <></>; // Render nothing if token is not available
  }

  let token = Cookies.get("token");
  let cleanToken = token.split("-")[0];

  // Data to be sent in the POST request
  const postData = {
    userId: cleanToken,
    gameTitle: params.slug,
    description: params.description,
    steamPrice: params.steamPrice,
    epicPrice: params.epicPrice,
  };

  // Making the POST request
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/suggestions/saveMetaRecord`, postData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });

  return (
    <></> // Render nothing while the request is handled
  );
}
