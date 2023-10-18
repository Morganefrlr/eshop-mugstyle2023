'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const AddPage = () => {

    const {data : session , status} = useSession()
    const router = useRouter()

    if(status === 'loading'){
       return <div>Loading.......</div>
    }
    
    if(status === 'unauthenticated' || !session?.user.isAdmin){
        router.push("/")
    }

    return (
        <div className="w-full h-[65vh] flex flex-col gap-10 items-center mt-20 max-md:h-auto">
            <h1 className="text-3xl mb-20 uppercase">Add Product</h1>
            <div className="grid grid-cols-2 gap-10 mx-10 max-md:flex max-md:flex-col">
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Title: </p>
                    <input type="text" placeholder="Title" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800"/>
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Price:</p>
                    <input type="number" placeholder="price" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Description:</p>
                    <textarea placeholder="description" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800"></textarea>
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Details:</p>
                    <textarea placeholder="details" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800"></textarea>
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Mug Type:</p>
                    <input type="text" placeholder="Mug Type" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Material:</p>
                    <input type="text" placeholder="Material" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Color:</p>
                    <input type="text" placeholder="Color" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Capacity:</p>
                    <input type="number" placeholder="Capacity" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Width:</p>
                    <input type="number" placeholder="Width" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
                <div className="flex gap-2 items-center max-md:flex-col">
                    <p className="text-lg uppercase tracking-widest">Height:</p>
                    <input type="number" placeholder="Height" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" />
                </div>
            </div>
            <button className="w-[350px] h-20 bg-[#1D1F2D] text-zinc-100 uppercase tracking-widest mt-20 cursor-pointer">Add Product</button>
        </div>
    );
};

export default AddPage;