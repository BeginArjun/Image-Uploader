'use client'
import { Progress } from '@chakra-ui/react'
const ProgressBar=()=>{
    return(
        <div className='flex flex-col items-center just'>
            <p className="text-[#4F4F4F] text-lg">Uploading...</p>
            <Progress
            value={50}
            size="md"
            colorScheme="blue" 
            width="100%"
            isIndeterminate 
            thickness="8px" 
            rounded="full"
            mt={4}
            />
        </div>
    )
}
export default ProgressBar