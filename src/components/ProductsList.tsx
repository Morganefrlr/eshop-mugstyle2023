'use client'

import { ProductType} from '@/types';
import Card from './Card';
import { useQuery } from 'react-query';

type Props ={
    update: boolean,
    home: boolean,

}


const ProductsList= ({update, home} : Props) => {


    const {isLoading, error, data} = useQuery({
        queryKey:['products'],
        queryFn: () =>
        fetch(`http://localhost:3000/api/products`).then(
            (res) => res.json()
        )
    })

   if(isLoading ) return 'loading ....'


    return (
        <div className="flex flex-col w-full">
            <div className={`${update ? 'w-full grid grid-cols-2 gap-8 max-lg:flex max-lg:flex-col max-lg:mx-auto' :'grid grid-cols-3 w-[50vw] gap-4 mx-auto max-xl:w-[60vw] max-md:w-[80vw] max-md:grid-cols-2 max-sm:grid-cols-1 '}`}>
                {home && !update && data.map((item: ProductType) =>
                    <div className="max-lg:h-[350px]" key={item.id}>
                        <Card title={item.title} img={item.cover} price={item.price} slug={item.slug} update={update}/>
                    </div>
                ).splice(1,9)}
                {!home && data.map((item: ProductType) =>
                    <div className={`${update ? '' : 'max-lg:h-[350px]'}`} key={item.id}>
                        <Card title={item.title} img={item.cover} price={item.price} slug={item.slug} update={update}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsList;