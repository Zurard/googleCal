"use client";

import { useState, useEffect } from "react";
// import { setAuthorization } from "./utils/server";
import Link from "next/link";
import { getAuth } from "./api/setAuth/route";


export default function Home() {
  // const [authData, setAuthData] = useState(null);
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await setAuthorization();
  //     console.log("Authorization data:", data);
  //     let smth = await data?.data
  //     setAuthData(smth);
  //   };

  //   fetchData();
  // }, []);

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"

  const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: "http://localhost:3000/dashboard",
        response_type: "code",
        scope: "profile",
    })

  return (
    <div className="flex">
      THIS IS A TEST PAGE
      <button
        className="flex flex-row items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        // onClick={setAuthorization}
     >
        Set Authorization
      </button>

      <Link href={URL_Googles_OAuth_2 + '?' + params.toString()} >Smth</Link>
    </div>
  );
}
