'use client'
import Link from "next/link";
import { useState } from "react";
import { VscMenu, VscChromeClose  } from "react-icons/vsc";
import { SlLogout } from "react-icons/sl";
import CartIcon from "./CartIcon";

const Menu = () => {

    const [open,setOpen] = useState(false)
    const user = false
    return (
        <div className={`${open ? 'bg-zinc-800 text-zinc-100' : ''}`}>
            <div className="p-2 relative">
               {open ?  
                (<VscChromeClose className='text-3xl cursor-pointer' onClick={() => setOpen(!open)}/>)
                :
                (<VscMenu className='text-3xl cursor-pointer' onClick={() => setOpen(!open)}/>)
               } 
            </div>
            {open && 
                <div className="flex flex-col w-[90vw] h-[80vh] gap-14 justify-center items-center bg-zinc-800 text-zinc-100 uppercase absolute top-[10vh] right-0 tracking-widest z-50">
                    <Link href='/' onClick={() => setOpen(false)}>Home</Link>
                    <Link href='/' onClick={() => setOpen(false)}>Our Products</Link>
                    <Link href='/' onClick={() => setOpen(false)}>About</Link>
                    <Link href='/' onClick={() => setOpen(false)}>Contact</Link>
                    {user ? 
                        (<SlLogout className="text-yellow-800 text-lg cursor-pointer"/>)
                        :
                        (<Link href="/login" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-inherit hover:underline-offset-4" onClick={() => setOpen(false)}>Login</Link>)
                    }
                </div>
            }
        </div>
    );
};

export default Menu;