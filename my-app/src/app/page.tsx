"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const [authData, setAuthData] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
   try {
    window.location.href = "api/setAuth";
   }
   catch (error) {
    console.error("Error during login:", error);
   }
  }



// const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
// 
// const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"

  // const params = new URLSearchParams({
  //     client_id: clientId || "",
  //     redirect_uri: "http://localhost:3000/dashboard",
  //       response_type: "code",
  //       scope: "profile",
  //   })

  return (
    <div className="flex">
      thi is the auth page 
      <br></br>
      <div>
         <button onClick={handleLogin}>
        login / SignUp
      </button>
      </div>


    </div>
  );
}
