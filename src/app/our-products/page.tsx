import Card from "@/components/Card";
import ProductsList from "@/components/ProductsList";
import { Product, allProducts } from "@/data";

const getData = async () =>{
    const res = await fetch(`http://localhost:3000/api/products/`,{
        cache: 'no-store'
    })
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
}


const ListProductsPage = async () => {

    const data : Product[] = await getData()



    return (
        <div className="flex flex-col mb-40">
            <h2 className="uppercase text-3xl text-center mt-32 mb-20">Our Products</h2>
            <ProductsList update={false} home={false}/>
        </div>
    );
};

export default ListProductsPage;
