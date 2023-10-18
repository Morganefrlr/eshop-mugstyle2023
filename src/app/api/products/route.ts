import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


// FETCH ALL PRODUCTS

export const GET = async (req:NextRequest) => {
  
    try{
        const products = await prisma.product.findMany({

        })
        return new NextResponse(JSON.stringify(products), {status : 200})
    }catch(err){
        return new NextResponse(JSON.stringify({message: 'Something went wrong!'}), {status : 500})
    }
}