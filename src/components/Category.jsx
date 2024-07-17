import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
export default function Category() {
    const [slide,setSlide] = useState(0);
    const [categories,setcategory] = useState([]);
    const fetchCategory = async () => {
        const response = await fetch("https://localhost:5000/categories");
        const data = await response.json();
        setcategory(data);
    }
    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => {
        console.log(categories.length);
        if(categories.length - 8 === slide) return false; 
        setSlide(slide+3);
    }

    const prevSlide = () => {
        if(slide === 0) return false; 
        setSlide(slide-3);
    }
  return (
    <div className='max-w-[1200px] mx-auto px-2 '>
    <div className='my-3 flex items-center justify-between'>
      <div className='text-[20px] font-bold'>What's On Your Mind?</div>
      <div className='flex'>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}> 
            <FaArrowLeft/>
        </div>
        <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ' onClick={nextSlide}> 
            <FaArrowRight />
         </div>
      </div>
    </div>
    <div className='flex border-red-600 overflow-hidden'>
        {
            categories.map(
                (cat,index) => {
                    return (
                        <div style={{
                            transform:`translateX(-${slide*100}%)`
                        }} key={index} className='w-[150px] shrink-0 duration-500'>
                        <img src={"http://localhost:5000/images/"+cat.image} alt="" />
                        </div>
                    )
                }
            )
        }
        Lets have Something Good Today
    </div>
    <hr className='my-6 border-[1px]'/>
    </div>
  )
}
