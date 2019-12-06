const express = require('express');
const cors = require('cors');

// import data
const data = require("../server/data/data.json");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// GET requests

app.get("/result", (req, res) => {
    res.send(data);
  });

// app.get("/", (req, res) => {
//     res.send(data);
//   });

// app.get("/", (req, res) => {
//     res.send(data);
//   });

// app.get("/", (req, res) => {
//     res.send(data);
//   });

// app.get("/", (req, res) => {
//     res.send(data);
//   });
 



  
  // router.get("/:id", (req, res) => {
  //   let id = req.params.id;
  //   const inventoryItem = data.find(item => item.id === id);
  //   if (!inventoryItem) {
  //     res.status(404).send("The item with the given ID was not found");
  //   }
  //   res.send(inventoryItem);
  // });

app.listen(8080, () => console.log('server online!'));