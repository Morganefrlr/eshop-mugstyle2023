'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {LiaEdit } from "react-icons/lia";
import ButtonDelete from './ButtonDelete';



type Props = {
    title:string,
    img: string,
    price: number,
    slug: string,
    update: boolean
}

const Card : React.FC<Props> = ({title, img, price, slug, update}) => {
    
    return (
        <div className={`${update ? 'flex gap-10 items-center p-2 cursor-pointer hover:border-[1px] hover:border-zinc-400 justify-center' :'flex flex-col w-full h-full text-zinc-800 gap-3 relative group'}`}>
            <Image src={img} alt='' width={500} height={500} className={`${update ? 'w-20 h-20 object-cover' : 'w-full h-[80%] object-cover transition-all duration-200 ease-linear group-hover:brightness-75'}`}/>
            {update ? 
            (<>
                <div className='flex flex-col w-[50%] gap-4'>
                    <p className='text-lg'>{title}</p>
                    <p>$ {price}</p>
                </div>
                <div>
                    
                </div>
                
                <div className='h-full flex flex-col justify-between text-2xl'>
                  <Link href={`/administrator/${slug}`}><LiaEdit className='hover:text-green-600 cursor-pointer'/></Link>
                   <ButtonDelete slug={slug}/>
                </div>
            </>)
            :
            
            
           (<>
                <div className='absolute w-full h-[80%] flex items-end justify-center opacity-0 top-8 transition-all duration-200 ease-linear group-hover:top-0 group-hover:opacity-100'>
                    <Link href={`/our-products/${slug}`} className='text-xs uppercase w-[80%] px-4 py-4 flex justify-center items-center bg-zinc-100 shadow-md mb-6 font-medium text-[#1D1F2D]'>Explore Mug</Link>
                </div>
                
                <h3 className='text-sm capitalize tracking-widest mx-auto text-center max-lg:text-xs'>{title}</h3>
                <p className='mx-auto text-xs'>${price}</p>
            </>)}
            
        </div>
    );
};

export default Card;