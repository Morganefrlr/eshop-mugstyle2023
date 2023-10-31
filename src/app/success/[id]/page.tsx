"use client";
import { useCartStore } from "@/utils/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const SuccessPage = ({ params }: { params: { id: string }}) => {

  const {removeFromCart} = useCartStore()
  const { id } = params;
const [products, setProducts]= useState([])
const router = useRouter()

  useEffect(() => {
    const makeRequest = async () => {
      try {
        
        const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
          method: "PUT",
          body: JSON.stringify({            
            status: "This order has been paid!",     
          })
        });
        
       setProducts(await res.json())
       

      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id]);

  const backHome = async () => {
    if(products.length >= 1 ){
      for(let i= 0; i < products.length; i++){
        removeFromCart(products[i])
      }
    }
      router.push('/')

  };




  return (
    <>
      <div className="h-[60vh] flex items-center justify-center gap-40 text-center text-2xl text-green-700 flex-col">
        <p className="max-w-[600px]">
          Payment successful. <br />
          Thank you very much for your order.
        </p>
        <button className='w-1/3 p-3 flex justify-center items-center uppercase tracking-widest bg-yellow-800 mx-auto  text-zinc-100 font-medium cursor-pointer max-md:text-sm' onClick={backHome}>Back to the Homepage</button>
      </div>
    </>
  );
};

export default SuccessPage;