'use client'
import Image from "next/image"
import UploadIcon from "../../assets/image.svg"
import axios from "axios"
import { useState } from "react"
import ProgressBar from "../Progress"



const UploadContainer=()=>{
    return(
        <div className="">
            <form encType="multipart/form-data" className="h-full" id="Dragform">
                <input id="imgDrop" type="file" name="image" alt="" className="hidden"/>
                <label className="flex flex-col items-center justify-around border border-dashed border-[#97BEF4] rounded-xl h-[218.903px] w-[338px] p-[0.75rem] bg-[#F6F8FB]" 
                for="imgDrop">
                <Image src={UploadIcon} alt="upload-icon" className="max-w-[114.131px] max-h-[88.241px]"/>
                <p className="text-xs text-[#BDBDBD] -tracking-tighter">Drag and Drop Image here</p>
                </label>
            </form>
        </div>
    )
}


const Upload=()=>{

    const [image,setImage]=useState(null)
    const [uploadStatus,setUploadStatus]=useState({isUploading:false,isUploaded:false})

    const uploadFile=async(file)=>{
        const Imgform=document.getElementById('Dragform')
        const formData=new FormData(Imgform)
        try{
            const {data}=await axios.post('/upload',formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            setImage(data.success?data.url:null)
            setUploadStatus((prevState)=>({...prevState,isUploaded:true}))
        }
        catch(err){
            console.error(err)
        }
    }

    

    const handleClick=()=>{
        const input=document.getElementById('imgDrop')
        input.onchange=(e)=>{
            console.log(e.target.files)
            uploadFile(e.target.files[0])
        }
        input.click()
        
    }
    console.log(image,uploadStatus)
    
    const UploadBtn=()=>{
        
        return(
            <button className="bg-[#2F80ED] rounded-lg p-2 text-white" onClick={handleClick}>Choose a file</button>
        )
    }

    return(
        <div className="m-auto w-1/2  bg-white rounded-xl
        shadow-lg shadow-offset-0 shadow-opacity-25 p-[0.75rem] border border-black">
            { (!uploadStatus.isUploading && !uploadStatus.isUploaded) &&
            <div className="flex flex-col justify-between items-center gap-4">
                
                <p className="text-[#4F4F4F] text-lg">Upload your Image</p>
                <p className="text-[#828282] text-xs">File should .jpeg, .png</p>
                <UploadContainer/>
                <p className="text-[#BDBDBD] text-xs font-medium -tracking-tighter">Or</p>
                <UploadBtn/>
            </div>
            }
            {
                (uploadStatus.isUploading && !uploadStatus.isUploaded) && 
                <ProgressBar/>
            }
            {
                (uploadStatus.isUploaded) &&
                <img src={image} alt="image"/>
            }
        </div>
    )
}

export default Upload