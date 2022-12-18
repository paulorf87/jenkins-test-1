const express = require("express"); 
const app = express(); 


// CUSTOM FUNCTIONS 
const renderTest = require("./controllers/renderTest");


// MIDDLEWARE
app.use(express.json());
// app.use(express.static(__dirname));


app.get("/", (req, res)=>{
    const response = renderTest();
    // res.render("index.html"); 
    res.status(200).json(response);
});

const PORT = 5000; 

app.listen(PORT, ()=> console.log(`App listening PORT: ${PORT}`));