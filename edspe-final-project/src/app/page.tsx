'use client';

import Image from "next/image";
import { useEffect } from "react";
import Script from 'next/script';
import 'animate.css';
import { useRouter } from "next/navigation";
import { title } from "process";


export default function Home() {
  const data = [
    {
      title: 'Week 1 (Introduction to Disability Studies)',
      imageUrl: "Gojo.jpeg"
    },
    {
      title: 'Week 2 (Constructions of Disability)',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 3 (Disability is an Intersection)',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 4 (Exploring Meanings of Disability in Schools)',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 5 (Difference, Not Deficit)',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 6',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 7',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 8',
      imageUrl: "Gojo.jpeg",
    },
    {
      title: 'Week 9',
      imageUrl: "Gojo.jpeg",
    }
  ]
  const router = useRouter();
  // Number of items
  const itemCount = data.length;
  // Calculate the rotation angle for each item
  const angleStep = 360 / itemCount;
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
            className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300 text-black flex items-center justify-center rounded-full animate__animated animate__fadeIn bg-[url('/center_image.jpeg')] bg-cover"
            style={{
              width: '26rem', // Same width as other ovals
              height: '16rem', // Same height as other ovals
              borderRadius: '50%',
              position: 'absolute',
              marginLeft: '-13rem', // Half of the width to center it
              marginTop: '-8rem', // Half of the height to center it
            }}
          >
            <div className="w-full h-full flex items-center justify-center flex-col"
              style={{
                width: '22rem', // Same width as other ovals
                height: '15rem', // Same height as other ovals
                borderRadius: '50%',
                position: 'absolute',
              }}
            >
              <p>What I Learned</p>
              <p>Disablity & Ableism</p>
            </div>
          </button>
          {[...Array(itemCount)].map((_, index) => {
            // Calculate the angle for this item
            const angle = angleStep * index - 90;
            // Convert the angle to radians for the CSS transform
            const radians = (angle * Math.PI) / 180;
            // Calculate the x and y position based on the oval shape
            const x = Math.cos(radians) * 700; // Adjust if necessary
            const y = Math.sin(radians) * 350; // Adjust if necessary
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
                  className="text-black flex transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"
                  onClick={()=>{router.push(`/reflection/week${index+1}`)}}
                >
                  <div
                    className={`text-black flex items-center justify-center hover:bg-indigo-500 bg-[url('/${data[index].imageUrl}')]`}
                    style={{
                      width: '18rem', // Updated width
                      height: '12rem', // Updated height
                      borderRadius: '50%',
                      position: 'absolute',
                      transform: `translate(${x}px, ${y}px)`,
                      marginLeft: '-9rem', // Half of the updated width
                      marginTop: '-6rem', // Half of the updated height
                    }}
                  >
                    {data[index].title}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bg-red-300 w-full flex justify-center h-screen">
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
