import ProductsList from '@/components/ProductsList';
import Link from 'next/link';
import { BsFillPlusCircleFill } from "react-icons/bs";



 

const UpdateProductsPage = () => {


   
    return (
        <div className='w-[90vw] mx-auto flex flex-col items-center mt-20 max-xl:w-[80%]'>
            <h1 className="text-3xl mb-20 uppercase">Update Products</h1>
            <Link href='/administrator/products/add' ><BsFillPlusCircleFill className="text-3xl text-zinc-900 mt-10 mb-20 cursor-pointer"/></Link>
            <ProductsList update={true} home={false} />
        </div>
    );
};

export default UpdateProductsPage;