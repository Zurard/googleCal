// 'use server'

// import axios from "axios";


// const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
// const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

// // first i need to set up authorization parameter 
// const URL_Googles_OAuth_2 = "https://accounts.google.com/o/oauth2/v2/auth"

// export const setAuthorization = async () => {
//   try {
//     const params = new URLSearchParams({
//       client_id: clientId || "",
//       redirect_uri: "http://localhost:3000",
//         response_type: "code",
//         scope: "profile",
//     })
//     const response = await axios.post(URL_Googles_OAuth_2 + '?' + params.toString());
//      console.log(response.data);
//     console.log(URL_Googles_OAuth_2 + '?' + params.toString())
//     return response;
//   } catch (error) {
//     console.error("Error fetching authorization data:", error);
//     return null;
//   }
// }

  