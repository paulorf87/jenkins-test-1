const express = require("express"); 
const app = express(); 

app.use(express.json());


app.get("/test", (req, res)=>{
    const response = {msg:"Request test success."}
    res.status(200).json(response);
});

const PORT = 5001; 

app.listen(PORT, ()=> console.log(`App listening PORT: ${PORT}`));