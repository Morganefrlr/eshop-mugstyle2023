'use client'
import Link from "next/link";
import { GiShoppingBag} from "react-icons/gi";
import Cart from "./Cart";
import { useState } from "react";


const CartIcon = () => {
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className="flex justify-center items-center gap-2 cursor-pointer max-md:gap-0">
            <GiShoppingBag onClick={() => setOpenCart(!openCart)} className='text-xl'/>
            <p className="hover:text-yellow-800 hover:underline hover:decoration-inherit hover:underline-offset-4 cursor-pointer max-md:hidden" onClick={() => setOpenCart(!openCart)}>Cart</p>
            <div className="w-4 h-4 bg-gray-300 rounded-full flex justify-center items-center text-[0.50rem] text-yellow-800 max-md:mb-2">1</div>
            {openCart && 
                <div className="absolute top-[-16px] right-0 z-50">
                    <Cart openCart={openCart} setOpenCart={setOpenCart}/>
                </div>}
        </div>
    );
};

export default CartIcon;