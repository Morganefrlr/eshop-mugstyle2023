'use client'


import Image from "next/image";
import { useState } from "react";


type Props ={
    images? : string[] 
}



const Slider = ({images} :Props) => {

    const [url, setUrl] = useState('')


    
    return (
        <div>
           {images && 
           <>
                <Image src={url ? (url) : (images[0])} width={200} height={200} alt='' className='w-full h-[500px] object-cover max-sm:h-[400px]'/>
                <div className='absolute top-[440px] left-3 flex gap-4 w-[45vw] max-md:w-fit max-sm:top-[360px]'>
                    {images && images.map((img, index) => 
                        <Image src={img} alt="" width={200} height={200} className='w-[120px] h-[120px] object-cover shadow-md max-lg:w-[100px] max-lg:h-[100px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[80px] max-sm:h-[80px] cursor-pointer' key={index} onClick={() => setUrl(img)}/>
                    )}
                </div>
            </>
            }
        </div>
    );
};

export default Slider;