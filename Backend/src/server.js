// const express = require("express")// type :common js
import express from "express"// type : module
import{ENV} from "./lib/env.js"
import path from "path";
import { connectDB } from "./lib/db.js";
import{serve} from "inngest/express";
import {inngest} from "./lib/inngest.js"

const app= express();

const __dirname=path.resolve()

// middleware
app.use(express.json())
// credentials true means => server allows a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use("/api/inngest", serve({ client: inngest,functions}))

app.get("/health",(req,res) => {
    res.status(200).json({msg:"api is up and running "});
});
app.get("/books",(req,res) => {
    res.status(200).json({msg:"this is the books endpoint "});
});

// make our app ready for deployment 
 if(ENV.NODE_ENV==" production"){
     app.use(express.static(path.join(__dirname,"../Frontend/dist")))
 }

app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});


const startserver = async () => {
    try{
      await connectDB();
const server = app.listen(ENV.PORT, () => {
    console.log("server is running on port:", ENV.PORT);
});

server.on("error", (error) => {
    console.error("Error starting server:", error);
    process.exit(1);
});
 } catch (error) {
    console.error("error starting the server ", error);
    
 }
};
startserver();