const express=require('express')
const multer=require('multer')
const path=require('path')

const router=express.Router()

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`./uploads/`)
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const checkFileType=(file,cb)=>{
    const filetypes=/jpeg|jpg|png/
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype=filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null,true)
    }
    else{
        cb("Error! Only .jpeg/.jpg/.png/.gif supported")
    }
}

const upload=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        return checkFileType(file,cb)
    }
})

router.post('/',upload.single('image'),(req,res)=>{
    const url = req.protocol + '://' + req.get("host");
    res.json({success:true,url:`${url}/${req.file.path}`})
})

module.exports=router