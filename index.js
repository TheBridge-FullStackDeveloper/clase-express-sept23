const express = require("express");
const app = express();
const path = require("path")

//middlewares
app.use(express.json())//parsea el req.body, sino es undefined
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','about.html'))
// })
// app.get("/", (req, res) => {
//   res.send("Como estan los makinas!?!");
// });

app.get("/saludar", (req, res) => {
  res.send("Holiis :)");
});

//endpoint por parametro
app.get("/myName/:name", (req, res) => {
  res.send("My name is " + req.params.name);
});

//endpoint por queryString
app.get("/myNameQuery", (req, res) => {
  res.send("My name is " + req.query.name + " " + req.query.lastName);
});
// localhost:3000/myName/?name=pedro

app.post("/myName", (req, res) => {
  res.send("My name is " + req.body.name);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
