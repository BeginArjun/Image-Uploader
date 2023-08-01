import Image from "next/image"
import UploadIcon from "../../assets/image.svg"
const UploadContainer=()=>{
    return(
        <div className="border border-dashed border-[#97BEF4] rounded-xl h-[218.903px] w-[338px] p-[0.75rem] bg-[#F6F8FB]">
            <div className="flex flex-col justify-around items-center h-full ">
                <Image src={UploadIcon} alt="upload-icon" className="max-w-[114.131px] max-h-[88.241px]"/>
                <p className="text-[#BDBDBD] text-xs font-medium -tracking-tighter">Drag & Drop your Image Here</p>
            </div>
        </div>
    )
}


const UploadBtn=()=>{
    return(
        <button className="bg-[#2F80ED] rounded-lg p-2 text-white">Choose a file</button>
    )
}

const Upload=()=>{
    return(
        <div className="m-auto w-1/2  bg-white rounded-xl
        shadow-lg shadow-offset-0 shadow-opacity-25 p-[0.75rem] border border-black">
            <div className="flex flex-col justify-between items-center gap-4">
                <p className="text-[#4F4F4F] text-lg">Upload your Image</p>
                <p className="text-[#828282] text-xs">File should .jpeg, .png</p>
                <UploadContainer/>
                <p className="text-[#BDBDBD] text-xs font-medium -tracking-tighter">Or</p>
                <UploadBtn/>
            </div>
        </div>
    )
}

export default Upload