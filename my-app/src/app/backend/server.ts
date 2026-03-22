"use server";
// need to call the google oauth api to get the user info and then create a session for the user
import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3333;

const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
);

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});

app.post("auth/login", async (req, res) => {
  console.log(req.headers.authorization);
  const tokenId = req.headers.authorization?.split(" ")[1];
  const ticket = await client.verifyIdToken({
    idToken: tokenId!,
    audience: client._clientId,
  });
  const payload = ticket.getPayload();
  console.log(payload);
  if (payload?.aud != client._clientId) {
    console.error("Invalid client ID");
    res.status(401).json({ message: "Unauthorized" });
  }
  if (!payload) {
    console.error("Invalid token");
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const { email, name } = payload;
  const authToken = jwt.sign({ email, name }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  console.log(authToken);
  res.json({ authToken });
});


app.post("/access", async (req, res) => {
  try {
    const authToken = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(authToken!, process.env.JWT_SECRET!);
  } catch (e) {
    return res.json({ data: "Not Authorized" });
  }
  res.json({ data: "Authorized" });
});
