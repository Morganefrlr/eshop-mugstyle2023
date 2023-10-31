'use client'

import InputsProduct from "@/components/InputsProduct";
import Slider from "@/components/Slider";
import { useQuery } from "react-query";




const UpdateSingleProductPage = ({params} : {params : {slug : string}}) => {

    const {slug} = params
    const {isLoading, error, data} = useQuery({
        queryKey:['product'],
        queryFn: () =>
        fetch(`http://localhost:3000/api/products/${slug}`).then(
            (res) => res.json()
        )
    })

   if(isLoading ) return 'loading ....'

    return (
        <div className='w-[90vw] mx-auto flex flex-col items-center mt-20 max-xl:w-[80%]'>
            {isLoading && 
                <div className="text-xl text-green-800 flex w-full justify-center items-center">Loading.......</div>
            }
            {error && 
                <div className="text-xl text-red-800 flex w-full justify-center items-center">Something went wrong</div>
            }
            {data &&
                <>
                <div className="w-full relative flex gap-20">
                    <div className="w-[500px]">
                        <Slider images={data.pictures}/>
                    </div>
                    <h1 className="text-5xl capitalize text-zinc-900 underline">{data.title}</h1>   
                </div>
                <div className="flex mt-40 w-full">
                    <InputsProduct 
                    title={""}
                    slug={slug}
                    desc={data.desc}
                    detail={data.detail}
                    price={data.price}
                    mugType={data.mugType}
                    material={data.material}
                    color={data.color}
                    capacity={data.capacity}
                    width={data.width}
                    height={data.height}
                    isFeatured={data.isFeatured}
                    pictures={[""]}
                    update={true}
                    />
                </div>
                </>
            }
            
        </div>
    );
};

export default UpdateSingleProductPage;