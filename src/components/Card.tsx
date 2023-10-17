import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


type Props = {
    title:string,
    img: string,
    price: number,
    slug: string
}

const Card : React.FC<Props> = ({title, img, price, slug}) => {
    return (
        <div className='flex flex-col w-full h-full text-zinc-800 gap-3 relative group'>
            <Image src={img} alt='' width={500} height={500} className='w-full h-[80%] object-cover transition-all duration-200 ease-linear group-hover:brightness-75'/>
            <div className='absolute w-full h-[80%] flex items-end justify-center opacity-0 top-8 transition-all duration-200 ease-linear group-hover:top-0 group-hover:opacity-100'>
                <Link href={`/our-products/${slug}`} className='text-xs uppercase w-[80%] px-4 py-4 flex justify-center items-center bg-zinc-100 shadow-md mb-6 font-medium text-[#1D1F2D]'>Explore Mug</Link>
            </div>
            
            <h3 className='text-sm capitalize tracking-widest mx-auto text-center max-lg:text-xs'>{title}</h3>
            <p className='mx-auto text-xs'>${price}</p>
        </div>
    );
};

export default Card;