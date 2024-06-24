const app = require("./app.js")

//Configuration
require("dotenv").config()
const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>(
    console.log(`Im listening at Port ${PORT}`)
    )) 