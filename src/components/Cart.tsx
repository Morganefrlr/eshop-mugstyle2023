'use client'
import React, { useEffect } from 'react';
import { featuredProducts } from '@/types';
import Image from 'next/image';
import { useCartStore } from '@/utils/store';
import { useSession } from 'next-auth/react';




const Cart = ({openCart, setOpenCart} : any) => {

    const {products, totalPrice, removeFromCart} = useCartStore()
    const {data : session} = useSession()

    useEffect(() =>{
        useCartStore.persist.rehydrate()
    },[])






    return (
        <div className='bg-[#1D1F2D] flex w-[40vw] h-[100vh] flex-col max-md:w-[70vw]'>
            <div className='flex justify-between items-center w-[80%] h-[100px] mx-auto pr-4'>
                <p className='uppercase text-xs tracking-widest font-medium text-zinc-300'>your cart</p>
                <p className='text-zinc-300 text-lg cursor-pointer' onClick={() => setOpenCart(false)}>X</p>
            </div>
            <hr className='w-full border-[0.5px] border-zinc-600'/>
            {products.map(item =>
                <div className='flex w-[70%] h-auto mx-auto items-center text-zinc-100 mt-10 justify-between max-xl:w-[75%]' key={item.id}>
                    <div className='flex'>
                        <Image src={item.img} alt='' width={200} height={200} className='w-28 h-28 object-cover mr-10 max-xl:w-20 max-xl:h-20 max-xl:mr-5 max-lg:w-16 max-lg:h-16'/>
                        <div className='flex flex-col gap-4 max-xl:gap-2 max-lg:gap-1'>
                            <p className='text-lg max-xl:text-sm max-lg:text-xs'>{item.title}</p>
                            <p className='text-base max-xl:text-sm max-lg:text-xs'>${item.price}</p>
                            <p className='uppercase text-zinc-500 tracking-widest cursor-pointer max-lg:text-xs' onClick={() => removeFromCart(item)}>Remove</p>
                        </div>
                    </div>
                    <div className='w-16 h-12 border-[1px] border-zinc-700 flex justify-center items-center max-lg:w-12 max-lg:h-8'>{item.quantity}</div>
                </div>
            )}

            <hr className='w-full border-[0.5px] border-zinc-600 mt-40'/>
            <div className='text-zinc-100 w-[80%] mx-auto'>
                <div className='flex text-lg justify-between mt-10'>
                    <p>Subtotal</p>
                    <p>$ {totalPrice}</p>
                </div>
                <button className='w-1/2 flex justify-center items-center uppercase tracking-widest bg-zinc-100 h-14 mx-auto mt-10 text-[#1D1F2D] font-medium cursor-pointer max-lg:w-full'>continue to checkout</button>
            </div>
        </div>
    );
};

export default Cart;