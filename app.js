const express = require("express"); 
const app = express(); 

// CUSTOM FUNCTIONS 
const renderTest = require("./controllers/renderTest");

app.use(express.json());


app.get("/test", (req, res)=>{
    const response = renderTest();
    res.status(200).json(response);
});

const PORT = 5000; 

app.listen(PORT, ()=> console.log(`App listening PORT: ${PORT}`));