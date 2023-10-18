import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


// FETCH SINGLE PRODUCT 
export const GET = async (req:NextRequest,{params} : {params:{slug:string}}) => {
    const {slug} = params

    try{
        const product = await prisma.product.findUnique({
            where:{
                slug: slug
            }
        })
        return new NextResponse(JSON.stringify(product), {status : 200})
    }catch(err){
        return new NextResponse(JSON.stringify({message: 'Something went wrong!'}), {status : 500})
    }
}


// DELETE PRODUCT

export const DELETE = async (req:NextRequest,{params} : {params:{slug:string}}) =>{
    const {slug} = params
    const session = await getAuthSession()
    if(session?.user.isAdmin){
       try{
            await prisma.product.delete({
                where:{
                    slug:slug
                },
                
            })
            return new NextResponse(JSON.stringify('Product has been deleted'), {status : 200})
        }
        catch(err){
            return new NextResponse(JSON.stringify({message: 'Something went wrong!'}), {status : 500})
        } 
    }
    return new NextResponse(JSON.stringify({message: 'You are not allowed!'}), {status : 403})

    
}