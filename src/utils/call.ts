'use client'

import { Product} from '@/data';

const getData = async () =>{
    const res = await fetch(`http://localhost:3000/api/products/`,{
        cache: 'no-store'
    })
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
}
export const dataProduits : Product[] = getData()