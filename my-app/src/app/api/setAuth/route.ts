
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

// first i need to set up authorization parameter 
const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"

export const setAuthorization = async () => {
  try {
    const params = new URLSearchParams({
      client_id: clientId || "",
      redirect_uri: "http://localhost:3000",
        response_type: "code",
        scope: "profile",
    })
     const respnse = await axios.post(URL_Googles_OAuth_2 + '?' + params.toString());
  } catch (error) {
    console.error("Error fetching authorization data:", error);
    return null;
  }
}


  export const getAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await setAuthorization();
        if (result) {
            res.status(200).json(result);
        }
    } 
    catch (error) {
        console.error("Error in getAuth:", error);
        res.status(500).json({ error: "Failed to get authorization data" });
    }
}