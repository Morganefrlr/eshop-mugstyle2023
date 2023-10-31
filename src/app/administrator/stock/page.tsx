'use client'
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const StockPage = () => {

    const data = [
        {
          "name": "Product A",
          "Sold": 16,
          "Stock": 34
        },
        {
          "name": "Product B",
          "Sold": 30,
          "Stock":20
        },
        {
          "name": "Product C",
          "Sold": 2,
          "Stock": 48
        },
        {
          "name": "Product D",
          "Sold": 8,
          "Stock": 42
        },
        {
          "name": "Product E",
          "Sold": 18,
          "Stock": 32
        },
        {
          "name": "Product F",
          "Sold": 23,
          "Stock": 27
        },
        {
          "name": "Product G",
          "Sold": 34,
          "Stock": 16
        }
      ]
      
                                
    return (
        <div className='w-[90vw] h-fit mx-auto flex justify-center items-center mt-20 mb-20'>
            <BarChart width={1000} height={750} data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Sold" fill="rgb(133 77 14)" />
                <Bar dataKey="Stock" fill="#1D1F2D" />
            </BarChart>
        </div>
    );
};

export default StockPage;