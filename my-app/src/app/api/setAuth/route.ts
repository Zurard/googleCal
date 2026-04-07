
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import { redirect } from 'next/navigation';

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;


// first i need to set up authorization parameter 
const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"

const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: "http://localhost:3000/Dashboard",
      response_type: "code",
      scope: "https://www.googleapis.com/auth/calendar",
      include_granted_scopes: "true", 
      access_type: "offline",
    })

export async function GET(){
   const authUrl = URL_Googles_OAuth_2 + '?' + params.toString();
   return redirect(authUrl);
}