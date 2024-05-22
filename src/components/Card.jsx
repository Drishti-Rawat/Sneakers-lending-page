import Image from 'next/image'
import React from 'react'

const Card = ({image,shoes , price}) => {
  return (
    <div className=' flex flex-col   rounded-xl overflow-hidden '>

        <div className='w-full bg-slate-100 px-4 overflow-hidden'>

       
            <Image src={image}
            width={150} height={240}
            className='object-contain bg-slate-100'
            />
       
            </div>
        <div className='px-4 bg-slate-50  border-b border-b-orange-200'>
            <h2 className='w-[60%] text-black font-semibold py-1 '>{shoes} </h2>
        </div>
        <div className=' px-4 flex justify-between  py-2 bg-white'>
            <span className='text-orange-400 font-bold text-md'>{price} </span>
            <span className='text-sm'>⭐⭐⭐⭐⭐</span>
        </div>
      
    </div>
  )
}

export default Card
