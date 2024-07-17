import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
    const [data,setData] = useState([]);

    const componentRef = useRef(null);
    const [isAtTop,setIsAtTop] = useState(false);
    useEffect(() =>
    {
        const handleScroll = () => {
            if(componentRef.current)
            {
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    }, []);
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
    <div className='max-w-[1200px] mx-auto px-2' ref={componentRef}>
    <div className='my-3 flex items-center justify-between'>
      <div className='text-[20px] font-bold'>Restuarents With OnLine Delivery in Madhyamgram</div>
    </div>
    <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0':''}>
        <div className='max-w-[1200px] mx-auto flex my-4 gap-4 border-red-500'
        >
            <div className='p-3 rounded-md shadow'>Filter</div>
            <div className='p-3 rounded-md shadow'>Sort By</div>
        </div>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        {
            data.map(
                (d,i) =>
                {
                    return <Card {...d}/>
                }
            )
        }
        <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>

         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
    </div>
  )
}
