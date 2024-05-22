'use client'
import React ,{useState} from "react";
import Image from "next/image";

const Navbar = () => {
    

  const NavItems = [
    {
      name: "Main",
    },
    {
      name: "About",
    },
    {
      name: "Shop",
    },
    {
      name: "Buy now",
    },
    {
      name: "FAQ",
    },
    {
      name: "Contact",
    },
  ];

  const [activeItem, setActiveItem] = useState(NavItems[0].name);
  const handleOnclick=(itemName)=>{

    setActiveItem(itemName)

  }
  return (
    <div className=" py-3 flex gap-3 bg-[#1f1e20] text-gray-300 relative z-20 ">

        <div className="  absolute  left-[-30px] top-[-23px]  px-10 py-10 border rounded-br-full  rounded ">
            <Image src="icons8-nike.svg" width={60} height={70} className=" "></Image>
        </div>
            
      
      <nav className="flex justify-around items-center flex-1 pt-4 pb-1 ">
        <ul className="flex gap-5 text-sm">
          {NavItems.map((item) => (
            <li key={item.name} onClick={()=>{handleOnclick(item.name)}} className={`px-2 cursor-pointer ${activeItem===item.name?"underline underline-offset-4 text-white scale-x-110":""} `}>{item.name}</li>
          ))}
        </ul>
        <div className="text-sm"> 
          <h2>+1666-345-657</h2>
        </div>
      </nav>
    </div>
   
    
  );
};

export default Navbar;
