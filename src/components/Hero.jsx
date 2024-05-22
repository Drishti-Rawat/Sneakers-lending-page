import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
    <div className=" min-h-[100vh] relative w-full text-white  overflow-hidden   flex  justify-around items-center content-center  ">
      <div className="px-10 flex flex-col gap-3 z-20   ">
        <h2 className="text-7xl font-bold flex  flex-col">
          <span>HAVE A </span> <span>DUNK DAY.</span>
        </h2>
        <h3 className="flex flex-col text-lg text-gray-300">
          <span>Check out out latest</span>
          <span>collections of sneakers.</span>
        </h3>
        <div className="flex gap-4 mt-4">
          <button className="border px-3  py-2 rounded-full flex justify-between items-center gap-4  ">
            <span className="text-lg pr-5 ">BUY NOW</span>
            <span>
              {" "}
              <svg
                height="20px"
                width="20px"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                enableBackground="new 0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  fill="white"
                  d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z"
                />
              </svg>
            </span>
          </button>
          <button className="border px-4  py-2 rounded-full flex justify-between items-center gap-7 ">
            <span className="text-sm  pr-7">SHOP</span>
            <span>
              {" "}
              <svg
                height="20px"
                width="20px"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 50 50"
                enableBackground="new 0 0 50 50"
                xmlSpace="preserve"
              >
                <path
                  fill="white"
                  d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="z-20   ">


        <div className=" absolute -top-60 right-24  ">
<Image src="/jordan.png" width={900} height={500} className="  -rotate-[20deg] "></Image>
        </div>
       

      </div>

      <div className="px-[330px] py-[300px] absolute right-36 rounded-full border-2 border-white"></div>
     

      <div className="absolute text-white overflow-hidden  -bottom-10 -rotate-6">
        <h2 className="text-[500px] font-extrabold z-50 text-[#3e4040] opacity-15 ">DUNK</h2>
      </div>

    </div>
     
    <div className="flex justify-end px-5 overflow-hidden relative">
        <Image src="/shoes.jpg" width={150} height={160} className="opacity-70"  />
        <div className="absolute text-white  text-sm right-12 py-3 flex flex-col gap-1">
            <h2 className="text-slate-300 text-lg font-semibold">Sneakers</h2>
            <span className="text-md text-slate-400 ">Watch the video</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></span>
        </div>
    </div>
    
   

    
    </>
  );
};

export default Hero;
