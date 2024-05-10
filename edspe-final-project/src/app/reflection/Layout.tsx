'use client';
import 'animate.css';
import Script from 'next/script';

export default function Layout({
  imageUrl,
  title,
  hoverText,
}: {
  imageUrl: string;
  title: string;
  hoverText: string;
}) {
  return (
    <>
      <Script 
        src={`https://chat.direqt.ai/embed.js?pubId=651501ecc46c59883afa5e82`}
        strategy="afterInteractive"
      />
    <div className="relative rounded-t-3xl h-screen">
      {/* Create static nav bar element */}
      <div className='absolute w-full flex py-2 px-4 bg-sky-400 text-white items-center'>
        <button 
          className='top-8 left-8 m-4 bg-indigo-500 px-4 py-2 rounded-lg transition ease-in-out duration-300 hover:bg-indigo-700'
          onClick={()=>{window.location.href = '/'}}
        >
          {`< Return to Homepage`}
        </button>

        <div>
          EDSPE 304 Final Project
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
            className={`group transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500 duration-300 text-black flex items-center justify-center rounded-full animate__animated animate__fadeInUpBig`}
            style={{
              width: '52rem', // Same width as other ovals
              height: '32rem', // Same height as other ovals
              borderRadius: '50%',
              position: 'absolute',
              marginLeft: '-26rem', // Half of the width to center it
              marginTop: '-16rem', // Half of the height to center it
              backgroundImage: `url(/${imageUrl})`,
              backgroundSize: 'cover',
            }}
          >
            
            <div className="absolute w-full h-full flex items-center justify-center flex-col bg-white/60 font-mono text-3xl group-hover:opacity-0 transition ease-in-out duration-300"
              style={{
                borderRadius: '50%',
              }}
            >
              <p>{title}</p>
              <p className='text-sm'>(Ask the chatbot for more information!)</p>
            </div>
            <div className="w-full h-full flex items-center justify-center flex-col bg-black/30 opacity-0 group-hover:opacity-100 transition ease-in-out delay-15 duration-300 text-white"
              style={{
                borderRadius: '50%'
              }}
            >
                {hoverText}
            </div>
          </button>
      </div>
      <div>
        <div className="w-1/2 flex items-center">
          <ins
            style={{ display: 'block', width: '50%', height: '100%'}}
            className="direqt-embed"
            data-bot-id="661e0776a0044418348622a6" // Replace with actual Bot ID
            data-layout='overlay'
          ></ins>
        </div>
      </div>
    </div>
    </>
  );
}
