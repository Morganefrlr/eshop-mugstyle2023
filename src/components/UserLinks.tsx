'use client'
import { SlLogout} from "react-icons/sl";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';



const UserLinks = () => {

    const {status} = useSession()



    return (
        <>
            {status === "authenticated" ? 
                (<SlLogout className="text-yellow-800 text-lg cursor-pointer max-md:text-zinc-100" onClick={() => signOut()}/>)
                :
                (<Link href="/login" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4 max-md:hidden">Login</Link>)
              }
        </>
    );
};

export default UserLinks;