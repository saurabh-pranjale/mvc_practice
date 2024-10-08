const express = require('express')
const allRoutes = require('./routes/toRoutes')



const app = express()

require('./config/server').connect()




const port = 4000

app.use('/api/jio',allRoutes)


app.listen(port,()=>{
    console.log(`we are listening at ${port}`)
})

