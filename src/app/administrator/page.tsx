import Link from 'next/link';
import React from 'react';

const AdminPage = () => {
    return (
        <div className='w-[90vw] h-[60vh] mx-auto flex items-center justify-evenly mt-20 max-xl:w-[80%]'>
            <Link href='/administrator/orders' className='w-1/4 h-[300px] bg-[#1D1F2D] flex justify-center items-center text-2xl text-zinc-100 hover:shadow-2xl hover:bg-opacity-95'>Orders</Link>
            <Link href='/administrator/products' className='w-1/4 h-[300px] bg-[#1D1F2D] flex justify-center items-center text-2xl text-zinc-100 hover:shadow-2xl hover:bg-opacity-95'>Products</Link>
            <Link href='/administrator/stock' className='w-1/4 h-[300px] bg-[#1D1F2D] flex justify-center items-center text-2xl text-zinc-100 hover:shadow-2xl hover:bg-opacity-95'>Stock</Link>
        </div>
    );
};

export default AdminPage;