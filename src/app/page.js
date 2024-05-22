"use client";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import InstaCard from "@/components/InstaCard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ALL");

  const tabs = ["ALL", "MEN", "WOMEN", "KIDS"];

  const SaleItem = [
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
  ];

  const ShoesItem = [
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/air-force-1-07-next-nature-shoes-nCJ6Wb.png",
      shoes: "Nike SB Dunk Low Parra",
      price: "$383",
    },
  ];

  return (
    <section className="bg-[#1f1e20]   w-full text-white">
      <Hero />

      {/* sale section */}

      <section className="flex flex-col justify-center items-center py-10">
        <div className=" flex justify-evenly gap-10 items-center py-4 px-5 ">
          <div className="relative">
            <div className="   overflow-hidden  ">
              <Image
                src="/james-knight.jpg"
                width={250}
                height={250}
                className="object-contain opacity-75 "
              />
            </div>

            <div className="flex gap-2 absolute py-1.5  px-2 top-0 right-0 backdrop-blur-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                fill="white"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                fill="white"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>

            <div className="absolute border rounded-full bottom-4  right-16 overflow-hidden">
              <button className=" text-white px-10 py-2 text-lg font-semibold bg-[#1f1e202c]">
                {" "}
                Open All
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 text-white">
            <div className="flex flex-row items-center justify-center gap-0.5">
              <span className="bg-[#dbdbdb]  rounded-full px-5 py-[1px]"></span>
              <div className="mx-3 text-white text-4xl font-semibold ">
                CLEARANCE SALE
              </div>
              <span className="bg-[#dbdbdb] px-5 rounded-full py-[1px] "></span>
            </div>

            <div className="flex gap-7 py-4 ">
              {SaleItem.map((item) => (
                <div className="px-4 " key={item.shoes}>
                  <Card
                    image={item.image}
                    shoes={item.shoes}
                    price={item.price}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-7 ">
              <div className="border px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </div>

              <div className="border px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* suggestion section */}

        <div className="flex flex-col items-center py-6 gap-10">
          <h2 className="text-7xl self-start  ">YOU MIGHT LIKE</h2>

          <div className="flex flex-col  gap-5">
            {/* tabs */}
            <div className="self-start">
              <ul className="flex gap-5">
                {tabs.map((item, index) => (
                  <li
                    key={item}
                    className={` flex  gap-4  text-lg cursor-pointer`}
                    onClick={() => setActiveTab(item)}
                  >
                    {" "}
                    <span
                      className={`${
                        activeTab === item
                          ? "text-yellow-500 scale-110"
                          : "text-slate-100"
                      }`}
                    >
                      {" "}
                      {item}{" "}
                    </span>{" "}
                    <span>{index < item.length - 1 && " |"}</span>{" "}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-4 gap-8 py-3 ">
              {ShoesItem.map((item) => (
                <Card
                  image={item.image}
                  shoes={item.shoes}
                  price={item.price}
                />
              ))}
            </div>

            <div className="self-center border rounded-full mt-6">
              <button className="text-lg px-9 py-2">View more</button>
            </div>
          </div>
        </div>
      </section>

      {/* sign up */}

      <div className="w-full h-[490px] overflow-hidden relative  ">
        <Image
          src="/skateboard.jpg"
          width={1689}
          height={150}
          className=" opacity-80 object-contain  object-bottom"
        />

        <div className="absolute top-28 left-28 gap-6 flex flex-col justify-center">
          <h3 className="flex flex-col text-5xl leading-tight">
            <span>SIGN UP </span>
            <span>FOR OUR NEWSLETTER</span>
          </h3>

          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg outline-none px-2.5 py-2.5 mx-2 w-[70%]"
            />
          </form>
        </div>
      </div>

      {/* New deliveries section */}
      <div className="">
        <div className="py-16 flex flex-col content-center justify-center gap-14  px-36">
          <h2 className="text-7xl font-bold py-6">NEW DELIVERIES</h2>

          <h3 className="flex flex-col text-3xl font-semibold">
            <span>Nike Air Rubber Dunk</span>
            <span>off-white UNC</span>
          </h3>

          <div>
            <button className="flex items-center gap-14 border px-6 py-2 rounded-full  ">
              <span className="text-lg px-2 ">More</span>
              <span>
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 512 512"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* instagram section */}

      <div className="relative w-full   ">
        <div className="triangle  h-[600px] w-full bg-white ">
       
        </div>

        <div className=" absolute -top-[80%] right-20 "> 
          <Image src="/jumpman-nike.png" width={900} height={800} className="object-contain -rotate-[5deg] "/>
        </div>
        
      </div>

     

      
      <div className="bg-white py-4 px-10 relative overflow-hidden ">
        <div className="text-black flex flex-col   gap-4  px-36  ">
          <h3 className="text-7xl font-bold py-14">Our Instagram</h3>
          <div className=" flex gap-4 z-20  ">
            <InstaCard image="/insta5.jpg" />
            <InstaCard image="/insta2.jpg" />
            <InstaCard image="/insta3.jpg" />
            <InstaCard image="/insta4.jpg" />
          </div>

          <div className="flex gap-4 ml-40 z-20 ">
            <InstaCard image="/insta5.jpg" />
            <InstaCard image="/insta2.jpg" />
            <InstaCard image="/insta3.jpg" />
            <InstaCard image="/insta4.jpg" />
          </div>

          <div className="self-center py-5 z-20 ">
            <button className="flex items-center gap-14 text-black border border-black px-3 py-2 rounded-full  ">
              <span className="text-lg font-semibold px-2 ">More</span>
              <span>
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 512 512"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                >
                  <polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="absolute text-white overflow-hidden top-10">
        <h2 className="text-[600px] font-extrabold z-20 text-[#8a8b8b99] opacity-15 -rotate-12 ">DUNK</h2>
      </div>
      </div>
      
    </section>
  );
}
