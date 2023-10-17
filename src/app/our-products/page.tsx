import Card from "@/components/Card";
import { allProducts } from "@/data";



const ListProductsPage = () => {
    return (
        <div className="flex flex-col mb-40">
            <h2 className="uppercase text-sm text-center mt-32 mb-20">Our Products</h2>
            <div className="grid w-[50vw] grid-cols-3 gap-4 mx-auto max-xl:w-[60vw] max-md:w-[80vw] max-md:grid-cols-2 max-sm:grid-cols-1">
                {allProducts.map(item =>
                    <div className="max-lg:h-[350px]" key={item.id}>
                        <Card title={item.title} img={item.img} price={item.price} slug={item.slug} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListProductsPage;