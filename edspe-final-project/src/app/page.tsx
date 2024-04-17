'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import Script from 'next/script';
import 'animate.css';
import { useRouter } from "next/navigation";
import { title } from "process";
import { useWindowDimensions } from "./windowDimension";


export default function Home() {
  const data = [
    {
      title: 'Week 1 (Introduction to Disability Studies)',
      imageUrl: "week1.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 2 (Constructions of Disability)',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 3 (Disability is an Intersection)',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 4 (Exploring Meanings of Disability in Schools)',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 5 (Difference, Not Deficit)',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 6',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 7',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 8',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    },
    {
      title: 'Week 9',
      imageUrl: "Gojo.jpeg",
      hoverText: "This is the hover text for the first item",
    }
  ]
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowDimensions();


  const scrollToElement = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Calculate the rotation angle for each item
  const angleStep = 360 / data.length;
  return (
    <>
      <Script 
        src={`https://chat.direqt.ai/embed.js?pubId=651501ecc46c59883afa5e82`}
        strategy="afterInteractive"
      />
      {/* <ins
        style={{ display: 'block', width: '50%', height: '100%'}}
        className="direqt-embed"
        data-bot-id="661e0776a0044418348622a6" // Replace with actual Bot ID
        data-layout='overlay'
      ></ins> */}
      <div className="relative p-8 rounded-t-3xl mx-auto h-screen w-full">
        <div className="absolute inset-0 bg-[url('/background.jpeg')] filter blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="group transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300 text-black flex items-center justify-center rounded-full animate__animated animate__fadeIn bg-[url('/center_image.jpeg')] bg-cover"
            style={{
              width: '26rem', // Same width as other ovals
              height: '16rem', // Same height as other ovals
              borderRadius: '50%',
              position: 'absolute',
              marginLeft: '-13rem', // Half of the width to center it
              marginTop: '-8rem', // Half of the height to center it
            }}
            onClick={scrollToElement}
          >
            
            <div className="absolute w-full h-full flex items-center justify-center flex-col bg-white/40 font-mono text-3xl group-hover:opacity-0 transition ease-in-out duration-300"
              style={{
                borderRadius: '50%',
              }}
            >
              <p>What I Learned</p>
              <p>Disablity & Ableism</p>
              <p className="text-xl">{"(Click or Hover for More!)"}</p>
            </div>
            <div className="w-full h-full flex items-center justify-center flex-col bg-black/30 opacity-0 group-hover:opacity-100 transition ease-in-out delay-15 duration-300 text-white"
              style={{
                borderRadius: '50%'
              }}
            >
              Click the center image to chat with an AI version of me! You can also hover over the other images to see what I learned throughout the course!
            </div>
          </button>
          {data.map((_, index) => {
            // Calculate the angle for this item
            const angle = angleStep * index - 90;
            // Convert the angle to radians for the CSS transform
            const radians = (angle * Math.PI) / 180;
            // Calculate the x and y position based on the oval shape
            const x = Math.cos(radians) * (width || 0) / 2.5; // Adjust if necessary
            const y = Math.sin(radians) * (height || 0) / 3; // Adjust if necessary
            // Calculate the animation delay, starting with index 9 and decreasing for each subsequent index
            const animationDelay = `${index * 0.1}`;

            return (
              <div                   
                key={index}
                className={`animate__animated animate__fadeInUpBig`}
                style={{
                  animationDelay: `${animationDelay}s`, // Apply the calculated animation delay
                }}
              >
                <button
                  className="text-black flex transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 group"
                  onClick={()=>{router.push(`/reflection/week${index+1}`)}}
                >
                  <div
                    className={`text-black flex items-center justify-center hover:bg-indigo-500 bg-cover`}
                    style={{
                      width: '18rem', // Updated width
                      height: '12rem', // Updated height
                      borderRadius: '50%',
                      position: 'absolute',
                      transform: `translate(${x}px, ${y}px)`,
                      marginLeft: '-9rem', // Half of the updated width
                      marginTop: '-6rem', // Half of the updated height
                      backgroundImage: `url(/${data[index].imageUrl})`,
                    }}
                  >
                    <div className="absolute w-full h-full flex items-center justify-center flex-col bg-white/30 group-hover:opacity-0 transition ease-in-out duration-300"
                      style={{
                        borderRadius: '50%'
                      }}>
                      {data[index].title}
                    </div>
                    <div className="w-full h-full flex items-center justify-center flex-col bg-black/30 opacity-0 group-hover:opacity-100 transition ease-in-out delay-15 duration-300"
                      style={{
                        borderRadius: '50%'
                      }}
                    >
                      {data[index].hoverText}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div ref={ref} className="absolute bg-red-300 w-full flex justify-center h-screen">
        <div className="w-1/2 flex items-center">
          <ins
            style={{ display: 'block', width: '50%', height: '100%'}}
            className="direqt-embed"
            data-bot-id="661e0776a0044418348622a6" // Replace with actual Bot ID
            data-layout='fixed'
          ></ins>
        </div>
      </div>
    </>
  );
}
