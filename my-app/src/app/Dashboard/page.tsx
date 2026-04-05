'use client'

import { use, useEffect } from "react";
import { extractCode } from "../api/setToken/route";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';
  console.log("code in dashboard", code);
  extractCode(code);
  
  const handleAccessToken = async () => {
    try {
      const res = await fetch("api/setToken", { method: "POST" });
      // const data = await res.json();
      console.log("Access token response:",res);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  }
  
 if (code) {
  useEffect(() => {
      handleAccessToken();    
  }, [code])

 }
  
  return (
    <div>
      welcome to dashboard
    </div>
  );
}