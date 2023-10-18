'use client'

import ProductsList from '@/components/ProductsList';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';




 

const UpdateProductsPage = () => {

    const {data : session , status} = useSession()
    const router = useRouter()

    if(status === 'loading'){
       return <div>Loading.......</div>
    }
    
    if(status === 'unauthenticated' || !session?.user.isAdmin){
        router.push("/")
    }

   
    return (
        <div className='w-[90vw] mx-auto flex flex-col items-center mt-20 max-xl:w-[80%]'>
            <h1 className="text-3xl mb-20 uppercase">Update Products</h1>
            <ProductsList update={true} home={false} />
        </div>
    );
};

export default UpdateProductsPage;