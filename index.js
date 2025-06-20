const express = require("express");
const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("Ready for business.")
})

app.listen(PORT,()=>{
    console.log(`ecomm backend listening at ${PORT}`)
});