'use client'

import { useSession } from 'next-auth/react';
import Link from "next/link";
import { RiAdminFill } from "react-icons/ri";

const AdminLink = () => {

    const {data : session , status} = useSession()

    return (
        <>
            {status  === 'authenticated' && session?.user.isAdmin && 
                <Link href='/administrator' className='text-zinc-800 text-lg cursor-pointer max-md:text-zinc-100'><RiAdminFill/></Link>
            }
        </>
    );
};

export default AdminLink;