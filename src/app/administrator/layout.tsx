'use client'

import { useSession } from 'next-auth/react'



export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const {data : session , status} = useSession()


    if(status === 'loading'){
       return <div className="text-xl text-green-800 flex w-full justify-center items-center">Loading.......</div>
    }
    
    if(status === 'unauthenticated' || !session?.user.isAdmin){
        return <div className="text-xl text-red-800 flex w-full justify-center items-center">You are not allowed!</div>
    }

  return (
      <div>
          {children}
      </div>
  )
}