// here i need to implemetn the Oath feature
import express from "express";
import bodyParser from "body-parser";
import OAuth2Server from "oauth2-server";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const request = OAuth2Server.Request;
const response = OAuth2Server.Response;

const oauth = new OAuth2Server({
  model: require("./model"), 
  // You need to implement the model according to your database
  allowBearerTokensInQueryString: true,
});

// fucntions to handle the token genrration and authrization
app.post("/oath/token", (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  // now we need to generate the token
  oauth
    .token(request, response)
    .then((token) => {
      res.json(token);
    })
    .catch((err) => {
      res.status(err.code || 500).json(err);
    });
});

//  now we need a middelware to intercept the request and check for the token
app.get("/secure", (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  oauth
    .authenticate(request, response)
    .then((token) => {
      res.json({ message: "Secure data", token });
    })
    .catch((err) => {
      res.status(err.code || 500).json(err);
    });
});

app.get("/secure", (req, res) => {
  res.send("secure data");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
