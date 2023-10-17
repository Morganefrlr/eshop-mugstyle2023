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
      <ProductsList />
      <Newsletter />
    </div>
  )
}
