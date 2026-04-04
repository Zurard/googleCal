
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import { redirect } from 'next/navigation';

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

// first i need to set up authorization parameter 
const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"
const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: "http://localhost:3000/Dashboard",
        response_type: "code",
        scope: "profile",
    })

export async function GET(){
   const authUrl = URL_Googles_OAuth_2 + '?' + params.toString();
   return redirect(authUrl);
}