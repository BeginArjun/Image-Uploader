const express=require('express')
const app=express()
const path=require('path')
const uploadRouter=require('./upload')
const PORT=8080

app.use(express.json())
app.use('/api/uploads',uploadRouter)

__dirname = path.resolve()
console.log(__dirname)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.listen(PORT,()=>{
    console.log(`Listening on PORT : ${PORT}`)
})