'use client';
import { useRef } from "react";
import Script from 'next/script';
import 'animate.css';
import { useRouter } from "next/navigation";
import { useWindowDimensions } from "./windowDimension";


export default function Home() {
  const data = [
    {
      title: 'Disability Studies',
      imageUrl: "week1.jpeg",
      hoverText: "\"I AM NOT YOUR INSPIRATIONAL PORN\" - Stella Young",
    },
    {
      title: 'Constructions of Disability',
      imageUrl: "week2.jpeg",
      hoverText: `How does society define the way we view disability? What should we do about this?`,
    },
    {
      title: 'Disability is an Intersection',
      imageUrl: "week3.jpeg",
      hoverText: `“What kind of world do we want to create, and how should we educate students for that world?” - Mara Sapon-Shevin`,
    },
    {
      title: 'Exploring Meanings of Disability in Schools',
      imageUrl: "week4.jpeg",
      hoverText: "What is \"normal\"? What does that mean for students with disabilities?",
    },
    {
      title: 'Difference, Not Deficit',
      imageUrl: "week5.jpeg",
      hoverText: "Ableism can be perceived on individual, cultural, and institutional levels",
    },
    {
      title: 'The Heumann Perspective Podcast',
      imageUrl: "week6.jpeg",
      hoverText: "Overcoming the societal barriers and discrimination in a culture that emphasized systemic ableism",
    },
    {
      title: 'Compounded Discrimination',
      imageUrl: "week7.jpeg",
      hoverText: "Disability is not the only thing people can often discriminate against"
    },
    {
      title: 'Pride in Disability',
      imageUrl: "week8.jpeg",
      hoverText: "\"Living our lives openly and without shame is a revolutionary act.\" - Harriet McBryde Johnson",
    },
    {
      title: 'Deaf Culture',
      imageUrl: "week9.jpeg",
      hoverText: "Deaf culture is bonded by a shared language and experiences of being Deaf in a world primarily designed for hearing individuals",
    }
  ]
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
            className="group transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300 text-black flex items-center justify-center rounded-full animate__animated animate__fadeIn bg-[url('/chat_image.jpeg')] bg-cover"
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
            
            <div className="absolute w-full h-full flex items-center justify-center flex-col bg-white/60 font-mono text-3xl group-hover:opacity-0 transition ease-in-out duration-300"
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
                  onClick={()=>{ window.location.href = `/reflection/week${index+1}`}}
                >
                  <div
                    className={`text-black flex items-center justify-center hover:bg-indigo-500 bg-cover font-mono`}
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
                    <div className="absolute w-full h-full flex items-center justify-center flex-col bg-white/40 group-hover:opacity-0 transition ease-in-out duration-300 text-xl"
                      style={{
                        borderRadius: '50%'
                      }}>
                      {data[index].title}
                    </div>
                    <div className="w-full h-full flex items-center justify-center flex-col bg-black/40 opacity-0 group-hover:opacity-100 transition ease-in-out delay-15 duration-300 text-white font-mono"
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
      <div ref={ref} className="absolute w-full flex justify-center h-screen bg-red-300">
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
