
'use client'
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    
    const {status} = useSession()
    const router = useRouter()

    if(status === 'loading'){
        return <div>Loading</div>
    }
    if(status === 'authenticated'){
        router.push('/')
    }





    return (
        <div className='relative w-[700px] h-[700px] mx-auto my-20 rounded-3xl shadow-2xl max-md:w-full max-md:rounded-none max-sm:h-[50vh]'>
            <Image src='/m1-b.jpg' alt='' width={500} height={500} className='w-[700px] h-[700px] object-cover mx-auto my-20 rounded-3xl max-md:w-full max-md:rounded-none max-sm:h-[50vh]'/>
            <div className='absolute flex flex-col gap-7 bg-[rgba(255, 255, 255, 0.24)] rounded-xl shadow-lg backdrop-blur-md border-[1px] border-white border-opacity-20 top-[25%] left-[25%] w-1/2 h-1/2 justify-center items-center max-sm:h-2/3 max-sm:top-[18%]'>
                <div className='w-[300px] h-10 flex bg-black rounded-full justify-center items-center text-zinc-100 text-sm gap-3 cursor-pointer hover:shadow-xl hover:font-medium max-sm:w-[150px]'>
                    <FaApple className='text-base max-sm:text-xl'/>
                    <p className='max-sm:hidden'>Sign in with Apple</p>
                </div>
                <div className='w-[300px] h-10 flex border-[1px] border-black rounded-full justify-center items-center text-zinc-800 text-sm gap-3 cursor-pointer hover:shadow-xl hover:font-medium max-sm:w-[150px]' onClick={() => signIn('google')}>
                    <FcGoogle className='text-base max-sm:text-xl' />
                    <p className='max-sm:hidden'>Sign in with Google</p>
                </div>
                <div className='w-[300px] h-10 flex bg-blue-600 rounded-full justify-center items-center text-zinc-100 text-sm gap-3 cursor-pointer hover:shadow-xl hover:font-medium max-sm:w-[150px]'>
                    <FaFacebook className='text-base max-sm:text-xl' />
                    <p className='max-sm:hidden'>Sign in with Facebook</p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;