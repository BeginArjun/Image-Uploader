const express=require('express')
const app=express()
const path=require('path')
const uploadRouter=require('./upload')
const PORT=3000


app.use('/api/uploads',uploadRouter)

__dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.listen(PORT,()=>{
    console.log(`Listening on PORT : ${PORT}`)
})