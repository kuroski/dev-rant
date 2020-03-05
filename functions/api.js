const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
const helmet = require("helmet");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/users/auth-token", async (req, res) => {
  try {
    const result = await fetch("https://devrant.com/api/users/auth-token", {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());

    res.json(result);
  } catch (error) {
    res.status(500).json({
      errors: [error]
    });
  }
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
