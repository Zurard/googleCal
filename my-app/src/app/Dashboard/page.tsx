"use client";

import { use, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  console.log("code in dashboard", code);


  const handleAccessToken = async () => {
    try {
      const res = await fetch("api/setToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }), // Send the authorization code in the request body
      });
      const data = await res.json();
      console.log("Access token response:", data);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  useEffect(() => {
    if (code) {
      handleAccessToken();
    }
  }, [code]);

  return <div>welcome to dashboard</div>;
}
