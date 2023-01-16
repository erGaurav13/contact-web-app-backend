const cors = require("cors");
const Querry = require("./src/user/querry.schema");
const express = require("express");
require("dotenv").config();
const sid = process.env.sid;
const auth_token = process.env.auth_token;

const connect = require("./config/db");
const userRouter = require("./src/user/user.route");

const app = express();
// put in dotenv file
// var sid = "ACf2017ad6a63e186963662292d1b2c82f";
// var auth_token = "aa957404173e5f14b865e26d1c06ad2e";
const twilio = require("twilio")(sid, auth_token);

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.post("/sendsms", async (req, res) => {
  const { firstName, lastName, number, otp, dateTime } = req.body;

  try {
    twilio.messages
      .create({
        from: "+13854817224",
        to: `+${number}`,
        body: `Hi, Your five  digit  Otp is ${otp} `,
      })
      .then((resp) => console.log(resp, "d"))
      .catch((err) => console.log(err));

    let qry = await Querry.create({
      firstName,
      lastName,
      number,
      otp,
      dateTime,
    });
    return res.send(qry);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
  res.send("error backend");
});

app.get("/", (req, res) => {
  res.send("Hello World WORKINGG");
});

// for send sms api

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connect;
  } catch {
    console.log("Could not connect to database");
  }
  console.log(`Server listening on port ${process.env.PORT || 8000}`);
});
