'use client'

import { useState } from "react";
import { MdOutlineKeyboardArrowUp,  MdOutlineKeyboardArrowDown} from "react-icons/md";

const Quantity = () => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className="flex flex-col gap-3">
            <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>quantity</p>
            <div className="flex gap-4">
                <div className="flex w-[150px] h-16 border-[1px] border-zinc-100 justify-around items-center">
                    <MdOutlineKeyboardArrowDown className="text-2xl cursor-pointer text-[#1D1F2D]" onClick={() => setQuantity(prev =>(prev>1 ? prev-1 : 1))}/>
                    <hr className="h-[40%] border-[0.5px] "/>
                    <p className="text-lg text-yellow-800">{quantity}</p>
                    <hr className="h-[40%] border-[0.5px] "/>
                    <MdOutlineKeyboardArrowUp  className="text-2xl cursor-pointer text-[#1D1F2D]" onClick={() => setQuantity(prev =>(prev<9 ? prev+1 : 9))}/>
                </div>
                <button className="h-16 flex justify-center items-center uppercase text-xs bg-[#1D1F2D] cursor pointer text-zinc-100 px-10 font-medium">add to cart</button>
            </div>
        </div>
    );
};

export default Quantity;