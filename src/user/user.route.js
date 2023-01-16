const express = require("express");
const User = require("./users.schema");
const Querry = require("./querry.schema");
const userRouter = express.Router();

// api for regester contact
userRouter.post("/login", async (req, res) => {
  const { firstName, lastName, number } = req.body;
  console.log("fff");

  try {
    let user = await User.create({ firstName, lastName, number });
    console.log(user);

    return res.status(201).send(user);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
});

// get user list to show
userRouter.get("/login", async (req, res) => {
  try{
    let user = await User.find();
    return  res.status(200).send(user);
  }catch(e){
    return  res.status(400).send(e);
  }
 
});

// get user full details
userRouter.get("/login/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let user = await User.find({ _id: id });
   return   res.status(200).send(user);
  } catch (e) {
   return  res.status(400).send(e);
  }
});

// get the full detail;s of OTP,DATE,TIME where it send
userRouter.get("/querry", async (req, res) => {
  try {
    let qry = await Querry.find();
    return res.status(200).send(qry);
  } catch (e) {
    return res.status(400).send(e);
  }
  
});

module.exports = userRouter;
