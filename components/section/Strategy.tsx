import { works } from "@/public/images/images";
import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  ChartPieIcon,
  CheckBadgeIcon,
  ScaleIcon,
} from "@heroicons/react/20/solid";

const Strategy = () => {
  const data = [
    {
      title: "Endpoint Management",
      content:
        "We meet with you to learn about your business, your goals, and your target audience.",
      image: (
        <MagnifyingGlassIcon className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] md:p-3 p-2 rounded-full  bg-primary text-white md:mr-6 mr-4" />
      ),
    },
    {
      title: " Remote assistanceand support ",
      content: "Remote assistanceand support",
      image: (
        <ChartPieIcon className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] md:p-3 p-2 rounded-full  bg-primary text-white md:mr-6 mr-4" />
      ),
    },
    {
      title: "Zero-touch Deployment",
      content:
        "We execute our strategy using the latest digital  tools and techniques.",
      image: (
        <CheckBadgeIcon className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] md:p-3 p-2 rounded-full  bg-primary text-white md:mr-6 mr-4" />
      ),
    },
    {
      title: "Intelligent Automation",
      content:
        "We track the results of our campaigns so that we can make adjustments as needed.",
      image: (
        <ScaleIcon className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] md:p-3 p-2 rounded-full  bg-primary text-white md:mr-6 mr-4" />
      ),
    },
  ];
  return (
    <div className="flex md:flex-row flex-col px-10 mb-20" id="strategy">
      <div className="md:w-1/2 space-y-6 md:pr-20">
        <h1 className="text-5xl font-medium">Why businesses love Alpha Store</h1>
        {/* <p className="">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p> */}
        <Image
          src={works}
          width={200}
          height={150}
          alt="Advertising Agency"
          className="w-full"
        />
      </div>
      <div className="md:w-1/2 md:px-4 md:mt-20 mt-10 md:space-y-10 space-y-4">
        {data.map((item, idx) => (
          <div className="flex  items-center" key={idx}>
            {item.image}
            <div className="w-full h-full flex-col flex-1 justify-center">
              <h2 className="text-2xl font-400">{item.title}</h2>
              <p className="text-light text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;
