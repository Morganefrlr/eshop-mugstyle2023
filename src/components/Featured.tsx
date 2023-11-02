'use client'
import { ProductType } from "@/types";
import Card from "./Card";
import { useQuery } from "react-query";



const Featured = () => {

   

    const {isLoading, error, data} = useQuery({
        queryKey:['products'],
        queryFn: () =>
        fetch(`http://localhost:3000/api/products/`).then(
            (res) => res.json()
        )
    })

   if(isLoading ) return 'loading ....'
   
   const isFeatured = data.filter((product :ProductType) => product.isFeatured === true)


    return (
        <div className="flex flex-col">
            <h2 className="uppercase text-sm text-center my-20">Featured Mugs</h2>
            <div className="flex w-[50vw] gap-5 h-[550px] mx-auto max-xl:w-[60vw] max-lg:h-[450px] max-md:w-[80vw] max-md:h-[350px] max-sm:flex-col max-sm:h-fit">
                {isFeatured.map((item : ProductType) =>
                    <div className="flex-1 cursor-pointer" key={item.id}>
                        <Card title={item.title} img={item.cover} price={item.price} slug={item.slug} update={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Featured;