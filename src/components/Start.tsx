import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Start = () => {
    return (
        <div className='w-[90vw] h-[400px] mx-auto relative my-20'>
           <Image src={'/i1.png'} alt='' width={2000} height={2000} className='w-full h-full object-cover'/> 
           <div className='absolute top-[25%] w-[40%] gap-5 flex flex-col left-32 max-md:top-[18%] max-md:left-24 max-sm:w-[90%] max-sm:left-[5%] max-sm:items-center'>
            <p className='uppercase text-xs tracking-widest'>best place to buy design</p>
            <h1 className='text-2xl'>Mug Style</h1>
            <span className='text-sm text-zinc-600 max-sm:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat laborum quas quis vitae repellendus sint corporis.</span>
            <Link href="/our-products" className='text-sm uppercase bg-zinc-800 w-2/3 h-14 text-zinc-100 mt-6 flex justify-center items-center max-sm:text-center'>Explore our mugs</Link>
           </div>
        </div>
    );
};

export default Start;