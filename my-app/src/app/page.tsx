"use client";

import { useState, useEffect } from "react";


export default function Home() {

  const handleLogin = async () => {
   try {
    window.location.href = "api/setAuth";
   }
   catch (error) {
    console.error("Error during login:", error);
   }
  }
// http://localhost:3000/Dashboard?iss=https%3A%2F%2Faccounts.google.com&code=4%2F0Aci98E_QAdgz33quJ9kjmHDeagU5gIKOe4JPrDf6d0s5EOw455r8ungcwd1TALD6iIRlGQ&scope=profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile
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
