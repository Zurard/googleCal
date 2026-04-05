//  Exchange authorization code for refresh and access token

type URL = {
  path: string;
};

const client = {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
};

const URL_Googles_OAuth_2_Token = "https://oauth2.googleapis.com/token";

let authCode = "";
export const extractCode = (Code: string) => {
  authCode = Code;
  console.log("code in extract code", authCode);
  return authCode;
};

const params = new URLSearchParams({
  client_id: client.client_id,
  client_secret: client.client_secret,
  code: authCode.toString(),
  grant_type: "authorization_code",
  redirect_uri: "http://localhost:3000/Dashboard",
});

export async function POST(request: Request) {
  const tokenURL = URL_Googles_OAuth_2_Token + "?" + params.toString();
  const res = await fetch(tokenURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await res.json();
  console.log("data is ", data);
  return new Response(JSON.stringify(data));
}