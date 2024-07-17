import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        console.log('hii')
        setToggle(true)
    }
    const hideSideMenu = () => {
        console.log('hii')
        setToggle(false)
    }
    const links = [
        {
            icon:<IoIosSearch />,
            name:"Search"
        },
        {
            icon:<CiDiscount1 />,
            name:"Offers",
            sup:"New"
        },
        {
            icon:<FaRegQuestionCircle/>,
            name:"Help"
        },
        {
            icon:<FaRegUser />,
            name:"Sign in"
        },
        {
            icon:<FiShoppingCart/>,
            name:"Cart",
            sup:"(0)"
        },
    ]
  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500'onClick={(hideSideMenu)} style={{
        opacity: toggle ? 1:0,
        visibility:toggle?"visible":"hidden"
    }}>
        <div onClick={(e)=>{
            e.stopPropagation();
        }}  className='w-[400px] bg-white h-full absolute duration-[400ms]' 
        style={
            {
                left:toggle?'0%':'-100%'
            }
        }></div>
    </div>
    <header className='p-[15px] shadow-xl text-[#7f8fa6] sticky top-0 bg-white z-[9999]'> 
        <div className='max-w-[1200px] mx-auto flex items-center'>
            <div className='w-[100px]'>
                <img src="images/logo.png" alt="" className='w-full' />
            </div>
            <div className=''>
            <span className='font-bold border-b-[3px] border-[black]'>Madhyamgram  </span> 
            Kolkata, West Bengal, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='cursor-pointer inline text-[#fc8019]'/>
            </div>
            <nav className=' hidden md:flex list-none gap-10 ml-auto border-black-500 font-semibold text-[15px]'>
                {
                    links.map(
                        (link,index)=>  {
                        return <li key={index} className='cursor-pointer flex hover:text-[#e84118] items-center gap-2'>
                            {link.icon}
                            {link.name}
                            <sup>{link.sup}</sup>
                    </li>
                    }
                )
            }
            </nav>
        </div>
    </header>
    </>
  )
}
