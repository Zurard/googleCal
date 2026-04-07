//  Exchange authorization code for refresh and access token
const client = {
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
};

const URL_Googles_OAuth_2_Token = "https://oauth2.googleapis.com/token";

export async function POST(request: Request) {
  const { code } = await request.json();
  if (!code) {
    return new Response(
      JSON.stringify({ error: "Authorization code is required" }),
      { status: 400 },
    );
  }
  console.log("code in set token route", code);

  const params = new URLSearchParams({
    client_id: client.client_id,
    client_secret: client.client_secret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:3000/Dashboard",
  });


  const tokenURL = URL_Googles_OAuth_2_Token + '?' + params.toString();
  const tokenres = await fetch(tokenURL , {
    method: "POST",
    headers:{
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  })
  const data = await tokenres.json();
  console.log("data is ", data);

  const accessToken = data.access_token;
  const refreshToken = data.refresh_token;


  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);

  return new Response(
    JSON.stringify({
     accessToken,
      refreshToken,
    }),
  );
}
