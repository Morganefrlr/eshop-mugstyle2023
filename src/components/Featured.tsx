import { featuredProducts } from "@/types";
import Card from "./Card";


const Featured = () => {
    return (
        <div className="flex flex-col">
            <h2 className="uppercase text-sm text-center my-20">Featured Mugs</h2>
            <div className="flex w-[50vw] gap-5 h-[550px] mx-auto max-xl:w-[60vw] max-lg:h-[450px] max-md:w-[80vw] max-md:h-[350px] max-sm:flex-col max-sm:h-fit">
                {featuredProducts.map(item =>
                    <div className="flex-1 cursor-pointer" key={item.id}>
                        <Card title={item.title} img={item.cover} price={item.price} slug={item.slug} update={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Featured;