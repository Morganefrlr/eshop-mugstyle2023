'use client'

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useSession } from "next-auth/react";
import {app} from '@/utils/firebase'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";



const storage = getStorage(app)

const AddPage = () => {

    const {data : session , status} = useSession()
    const router = useRouter()
    const [inputsString, setInputsString]= useState({
        title:"",
        desc:"",
        detail:"",
        mugType:"",
        material:"",
        color:"",
    })
    const [inputsNumber, setInputsNumber]= useState({
        price:0,
        capacity:0,
        width:0,
        height:0

    })
    const [file, setFile] = useState<File[]>([])
    const [media, setMedia] = useState<String[]>([])
    


    const handleChangeString = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputsString(prev => {
            return{...prev,[e.target.name] : e.target.value}
        })
    }
    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputsNumber(prev => {
            return{...prev,[e.target.name] : parseInt(e.target.value) }
        })
    }

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

   



    const slugify = (str : string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
            const res = await fetch('http://localhost:3000/api/products',{
                method: 'POST',
                body: JSON.stringify({
                    ...inputsString,
                    ...inputsNumber,
                    slug:slugify(inputsString.title),
                    cover:media[0],
                    isFeatured: false,
                    pictures:media
                })
            })
            const data = await res.json()
            console.log("c'est ok")
        }catch(err){
            console.log(err)
            console.log('pas de soucis')
        }
    }



    if(status === 'loading'){
       return <div>Loading.......</div>
    }
    
    if(status === 'unauthenticated' || !session?.user.isAdmin){
        router.push("/")
    }


    return (
        <div className="w-full flex flex-col gap-10 items-center mt-20 max-md:h-auto">
            <h1 className="text-3xl mb-20 uppercase">Add Product</h1>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <input className="ring-1 ring-red-500 p-2 rounded-sm" type="file" id="files" style={{display : 'none'}} onChange={handleChangeImg}/>
                <label htmlFor="files"><MdAddPhotoAlternate className='text-3xl cursor-pointer mb-10'/></label>
                   {file && file.length !== 0 && <div className="w-full flex justify-center gap-5 my-20 max-sm:flex-wrap">
                       {file.length && file.map(img =>
                        <Image src={URL.createObjectURL(img)} alt='' width={200} height={200} className="w-20 h-20 object-cover"/>
                        )}
                    </div>}
                <div className="grid grid-cols-2 gap-10 mx-10 max-md:flex max-md:flex-col">
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Title: </p>
                        <input name="title" type="text" placeholder="Title" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeString}/>
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Price:</p>
                        <input name="price" type="number" placeholder="price" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeNumber} />
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Description:</p>
                        <textarea name="desc" placeholder="description" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeString}></textarea>
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Details:</p>
                        <textarea name="detail" placeholder="details" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeString}></textarea>
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Mug Type:</p>
                        <input name="mugType" type="text" placeholder="Mug Type" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeString} />
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Material:</p>
                        <input name="material" type="text" placeholder="Material" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeString} />
                    
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Color:</p>
                        <input name="color" type="text" placeholder="Color" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800"  onChange={handleChangeString}/>
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Capacity:</p>
                        <input name="capacity" type="number" placeholder="Capacity" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeNumber} />
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Width:</p>
                        <input name="width" type="number" placeholder="Width" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800"  onChange={handleChangeNumber}/>
                    </div>
                    <div className="flex gap-2 items-center max-md:flex-col">
                        <p className="text-lg uppercase tracking-widest">Height:</p>
                        <input name="height" type="number" placeholder="Height" className="w-[200px] border-[1px] p-2 text-sm focus:outline-zinc-800" onChange={handleChangeNumber} />
                    </div>
                </div>
                <button type="submit" className="w-[350px] h-20 bg-[#1D1F2D] text-zinc-100 uppercase tracking-widest mt-20 cursor-pointer">Add Product</button>
            </form>
        </div>
    );
};

export default AddPage;