
import { allProducts } from '@/data';
import Card from './Card';




const ProductsList= () => {



    return (
        <div className="flex flex-col">
            <h2 className="uppercase text-sm text-center mt-40 mb-20">More Products</h2>
            <div className="grid w-[50vw] grid-cols-3 gap-4 mx-auto max-xl:w-[60vw] max-md:w-[80vw] max-md:grid-cols-2 max-sm:grid-cols-1">
                {allProducts.map(item =>
                    <div className="max-lg:h-[350px]" key={item.id}>
                        <Card title={item.title} img={item.img} price={item.price} slug={item.slug}/>
                    </div>
                ).splice(1,9)}
            </div>
        </div>
    );
};

export default ProductsList;