import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Card from './Card';
export default function TopRest() {
    const [data,setData] = useState([]);
    const fetchTopRestaurent = async () =>
    {   
        const response = await fetch('https://localhost:5000/top-restaurent-chains');
        const apiData = await response.json();
        setData(apiData);
    }
    useEffect(
        () => {
            fetchTopRestaurent();
        }, []
    )
  return (
    <div className='max-w-[1200px] mx-auto px-3'>
    <div className='my-3 flex items-center justify-between'>
      <div className='text-[20px] font-bold'>Top Restuarent Chains in Madhyamgram </div>
      <div className='flex'>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' > 
            <FaArrowLeft/>
        </div>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ' > 
            <FaArrowRight />
         </div>
      </div>
    </div>
    <div className='flex gap-5 overflow-hidden'>
        {
            data.map(
                (d,i) => {
                    return <Card{...d} key={i}/>
                }
            )
        }
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
    </div>
    <hr className='my-3 border-[1px]'/>
    </div>
  )
}
