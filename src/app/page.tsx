import About from "@/components/About";
import Featured from "@/components/Featured";
import Newsletter from "@/components/Newsletter";
import ProductsList from "@/components/ProductsList";
import Start from "@/components/Start";


export default function Home() {
  return (
    <div className="text-3xl text-gray-800">
      <Start />
      <About />
      <Featured />
      <h2 className="uppercase text-sm text-center mt-40 mb-20">More Products</h2>
      <ProductsList update={false} home={true}/>
      <Newsletter />
    </div>
  )
}
