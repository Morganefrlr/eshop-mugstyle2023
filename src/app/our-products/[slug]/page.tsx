import Image from 'next/image';
import { singleProduct } from '@/data';
import Quantity from '@/components/Quantity';
import Newsletter from '@/components/Newsletter';



const ProductPage = () => {
    return (
        <div className='mt-20'>
            <div className='flex gap-10 relative w-[90vw] mx-auto 2xl:w-[70vw] 2xl:gap-40 max-md:flex-col'>
                <div className='flex-1'>
                    <Image src={singleProduct.img} width={200} height={200} alt='' className='w-full h-[500px] object-cover max-sm:h-[400px]'/>
                    <div className='absolute top-[440px] left-3 flex gap-4 w-[45vw] max-md:w-fit max-sm:top-[360px]'>
                        {singleProduct.pictures && singleProduct.pictures.map((img, index) => 
                            <Image src={img} alt="" width={200} height={200} className='w-[120px] h-[120px] object-cover shadow-md max-lg:w-[100px] max-lg:h-[100px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[80px] max-sm:h-[80px]'/>
                        )}
                    </div>
                </div>
                <div className='flex-1 flex gap-8 flex-col justify-center'>
                    <h1 className='text-4xl max-md:mt-20 max-sm:mt-10'>{singleProduct.title}</h1>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>by: MugStyle</p>
                    <span className='text-zinc-500 leading-7'>{singleProduct.desc}</span>
                    <p className='text-yellow-800 text-2xl'>${singleProduct.price}</p>
                    <Quantity/>
                </div>
            </div>

            <div className='flex gap-10 mt-40 w-[90vw] mx-auto 2xl:w-[70vw] 2xl:gap-40 max-sm:flex-col-reverse'>
                <div className='flex-1'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500 mb-5'>details</p>
                    <span className='w-full leading-8 text-zinc-500'>{singleProduct.detail}</span>
                </div>
                <div className='flex-1'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500 mb-5'>style & more</p>
                    <ul className='text-zinc-500 list-disc ml-4'>
                        <li className='my-2'>Mug Type: {singleProduct.mugType}</li>
                        <li className='my-2'>Material: {singleProduct.material}</li>
                        <li className='my-2'>Color: {singleProduct.color}</li>
                        <li className='my-2'>Capacity(ml): {singleProduct.capacity}</li>
                        <li className='my-2'>Height(cm): {singleProduct.height}</li>
                        <li className='my-2'>Width(cm): {singleProduct.width}</li>
                    </ul>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default ProductPage;