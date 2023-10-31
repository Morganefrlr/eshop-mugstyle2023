'use client'
import { OrderType } from '@/types';
import { useQuery } from 'react-query';

const OrdersPage = () => {


    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
          fetch('http://localhost:3000/api/orders').then(
            (res) => res.json(),
          ),
    })

    return (
        <div className='w-[90vw] mx-auto'>
            <table className="w-full border-separate  border-spacing-0 mt-20">
                <thead>
                    <tr className="text-left">
                        <th className="hidden md:block">Order ID</th>
                        <th className="">Date</th>
                        <th className="">Price</th>
                        <th className="hidden md:block">UserEmail</th>
                        <th className="">Status</th>
                    </tr>
                </thead>
                <tbody>
                   {data && data.map((item:OrderType) =>
                        <tr className={`text-sm md:text-base`} key={item.id}>
                            <td className="hidden md:block py-6 px-1 border-b border-zinc-800">{item.id}</td>
                            <td className="py-6 px-1 border-b border-zinc-800">{item.createdAt.toString().slice(0,10)}</td>
                            <td className="py-6 px-1 border-b border-zinc-800">{item.price}</td>                          
                            <td className="hidden md:block py-6 px-1 border-b border-zinc-800">{item.userEmail}</td>
                            <td className="py-6 px-1 font-bold text-green-700 border-b border-zinc-800">{item.status}</td>
                        </tr>
                    ).reverse()}
                    
                </tbody>
            </table>

        </div>
    );
};

export default OrdersPage;