import Image from "next/image";
import { useEffect } from "react";
import Script from 'next/script';
import 'animate.css';


export default function Home() {
    // Number of items
    const itemCount = 10;
    // Calculate the rotation angle for each item
    const angleStep = 360 / itemCount;
  return (
    <>
      <Script 
        src={`https://chat.direqt.ai/embed.js?pubId=651501ecc46c59883afa5e82`}
        strategy="afterInteractive"
      />
      <div className="relative p-8 rounded-t-3xl max-w-4xl mx-auto shadow-lg h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="bg-gray-200 text-black flex items-center justify-center rounded-full animate__animated animate__fadeIn"
            style={{
              width: '20rem', // Same width as other ovals
              height: '14rem', // Same height as other ovals
              borderRadius: '50%',
              position: 'absolute',
              marginLeft: '-10rem', // Half of the width to center it
              marginTop: '-7rem', // Half of the height to center it
            }}
          >
            What I Learned
          </div>
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
                className="animate__animated animate__fadeInUpBig"
                style={{
                  animationDelay: `${animationDelay}s`, // Apply the calculated animation delay
                }}
              >
                <div
                  className="bg-gray-200 text-black flex items-center justify-center rounded-full"
                  style={{
                    width: '16rem', // Updated width
                    height: '10rem', // Updated height
                    borderRadius: '50%',
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px)`,
                    marginLeft: '-8rem', // Half of the updated width
                    marginTop: '-5rem', // Half of the updated height
                  }}
                >
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <ins
            style={{ display: 'block', width: '100%', height: '100%'}}
            className="direqt-embed"
            data-bot-id="661e0776a0044418348622a6" // Replace 'YOUR_BOT_ID' with actual Bot ID
        ></ins>
      </div>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <Script 
    //       src={`https://chat.direqt.ai/embed.js?pubId=651501ecc46c59883afa5e82`}
    //       strategy="afterInteractive"
    //   />
    //   <div>
    //     <ins
    //         style={{ display: 'block', width: '100%', height: '100%'}}
    //         className="direqt-embed"
    //         data-bot-id="661e0776a0044418348622a6" // Replace 'YOUR_BOT_ID' with actual Bot ID
    //     ></ins>
    //   </div>
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
