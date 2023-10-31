import { useRouter } from 'next/navigation';
import React, { useState } from 'react';




type Props ={
    title:string,
    desc: string,
    detail: string,
    price: number,
    mugType: string,
    material: string,
    color:string,
    capacity:number,
    width:number,
    height:number,
    isFeatured: boolean,
    slug:string
    pictures:String[],
    update:boolean
}

const InputsProduct = ({title, pictures, slug, desc, detail, price, mugType, material, color, capacity, width, height, isFeatured, update} : Props) => {

    const router = useRouter()
    
    const [descUpdate, setDescUpdate] = useState(desc)
    const [detailUpdate, setDetailUpdate] = useState(detail)
    const [priceUpdate, setPriceUpdate] = useState(price)
    const [mugTypeUpdate, setMugTypeUpdate] = useState(mugType)
    const [materialUpdate, setMaterialUpdate] = useState(material)
    const [colorUpdate, setColorUpdate] = useState(color)
    const [capacityUpdate, setCapacityUpdate] = useState(capacity)
    const [widthUpdate, setWidthUpdate] = useState(width)
    const [heightUpdate, setHeightUpdate] = useState(height)
    const [isFeaturedUpdate, setIsFeaturedUpdate] = useState(isFeatured)



    const slugify = (str : string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    /////////////////////////////////////////////////// UPDATE & CREATE PRODUCT ////////////////////////////////////////////////////
 
    const handleSubmit = async () => {
        if(update){
            try{
                const res = await fetch(`http://localhost:3000/api/products/${slug}`,{
                    method: 'PUT',
                    body: JSON.stringify({            
                        price :priceUpdate,       
                        capacity :capacityUpdate,    
                        width : widthUpdate,      
                        height: heightUpdate,      
                        material : materialUpdate,   
                        color : colorUpdate,      
                        mugType : mugTypeUpdate,   
                        desc : descUpdate,       
                        detail: detailUpdate,      
                        isFeatured :  isFeaturedUpdate,

                    })
                })
                const data = await res.json()
                
            }catch(err){
                console.log(err)

            }
        }
        if(!update){
            try{
                const res = await fetch('http://localhost:3000/api/products',{
                    method: 'POST',
                    body: JSON.stringify({
                        slug:slugify(title),
                        views:0,
                        title:title,
                        price :priceUpdate,       
                        capacity :capacityUpdate,    
                        width : widthUpdate,      
                        height: heightUpdate,      
                        material : materialUpdate,   
                        color : colorUpdate,      
                        mugType : mugTypeUpdate,   
                        desc : descUpdate,       
                        detail: detailUpdate,      
                        isFeatured :  isFeaturedUpdate,
                        cover:pictures[0],
                        pictures:pictures
                    })
                })
                const data = await res.json()
                router.push(`/our-products/${data.slug}`)
               
            }catch(err){
                console.log(err)
                
            }
        }
        
    }






    return (
        <div className='flex flex-col w-full justify-between'>
            <div className='flex w-full'>
                <div className='flex flex-col flex-[2] gap-4'>
                <div className='flex flex-col gap-2 w-3/4'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Description:</p>
                    <textarea  placeholder='Description' value={descUpdate} onChange={(e) => setDescUpdate(e.target.value)}  rows={10} className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2 w-3/4'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Detail:</p>
                    <textarea  placeholder='Detail' value={detailUpdate} onChange={(e) => setDetailUpdate(e.target.value)}  rows={10} className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>

            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Price:</p>
                    <input type="number" placeholder='Price' value={priceUpdate} onChange={(e) => setPriceUpdate(parseInt(e.target.value))} className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Mug Type:</p>
                    <input type="text" placeholder='Mug Type' value={mugTypeUpdate} onChange={(e) => setMugTypeUpdate(e.target.value)}  className='p-2 ml-2 capitalize text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Material:</p>
                    <input type="text" placeholder='Material' value={materialUpdate} onChange={(e) => setMaterialUpdate(e.target.value)} className='p-2 ml-2 capitalize text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Color:</p>
                    <input type="text" placeholder='Color' value={colorUpdate} onChange={(e) => setColorUpdate(e.target.value)}  className='p-2 ml-2 capitalize text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Capicity:</p>
                    <input type="number" placeholder='Capicity' value={capacityUpdate} onChange={(e) => setCapacityUpdate(parseInt(e.target.value))}  className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Height(cm):</p>
                    <input type="number" placeholder='Height' value={heightUpdate} onChange={(e) => setHeightUpdate(parseInt(e.target.value))}  className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Width(cm):</p>
                    <input type="number" placeholder='Width' value={widthUpdate} onChange={(e) => setWidthUpdate(parseInt(e.target.value))}  className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>featured product</p>
                    <input type="checkbox" checked={isFeaturedUpdate} onChange={() => setIsFeaturedUpdate(!isFeatured)} className="w-6 h-6 ml-4"/>
                </div>
            </div>
            </div>
            <button onClick={handleSubmit} className="w-[350px] h-20 bg-[#1D1F2D] text-zinc-100 uppercase tracking-widest mt-20 cursor-pointer">
                {update ? 'Update Product' : 'Add Product'}
            </button>
            
        </div>
    );
};

export default InputsProduct;