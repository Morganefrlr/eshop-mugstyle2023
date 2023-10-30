'use client'

import InputsProduct from '@/components/InputsProduct';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import {app} from '@/utils/firebase'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const storage = getStorage(app)

const addProductPageTest = () => {


    
    const [file, setFile] = useState<File[]>([])
    const [media, setMedia] = useState<String[]>([])
    const [title, setTitle] = useState('')

    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const target = e.target as HTMLInputElement
        const item = (target.files as FileList)[0]
        setFile([...file, item])
    }




    useEffect(()=>{
        const upload = () =>{
            if(file){
              file.forEach((el) => { const name = new Date().getTime + el.name
               const storageRef = ref(storage, name);

                const uploadTask = uploadBytesResumable(storageRef, el);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                console.log(error)
                }, 
                () => {
                
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        const url = downloadURL
                        setMedia([...media,url])
                    });
                }
                );})
            } 
            }
            
        file && upload()
    },[file])

   



    return (
        <div className="flex flex-col gap-10 items-center mt-20 max-md:h-auto w-[90vw] mx-auto max-xl:w-[80%]">
            <h1 className="text-3xl mb-20 uppercase">Add Product</h1>
                <input className="ring-1 ring-red-500 p-2 rounded-sm" type="file" id="files" style={{display : 'none'}} onChange={handleChangeImg}/>
                <label htmlFor="files"><MdAddPhotoAlternate className='text-3xl cursor-pointer mb-10'/></label>
                    {file && file.length !== 0 &&
                        <div className="w-full flex justify-center gap-5 my-20 max-sm:flex-wrap">
                        {file.length && file.map(img =>
                            <Image src={URL.createObjectURL(img)} alt='' width={200} height={200} className="w-20 h-20 object-cover"/>
                            )}
                        </div>
                    }
                <div className='flex flex-col gap-2 self-start'>
                    <p className='uppercase text-xs tracking-widest font-medium text-zinc-500'>Title:</p>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='p-2 ml-2 text-lg focus:outline-zinc-500 rounded-md'/>
                </div>
                <InputsProduct 
                    title={title}
                    slug={""}
                    desc={""}
                    detail={""}
                    price={0}
                    mugType={""}
                    material={""}
                    color={""}
                    capacity={0}
                    width={0}
                    height={0}
                    isFeatured={false}
                    pictures={media}
                    update={false}
                />
        </div>
    );
};

export default addProductPageTest;