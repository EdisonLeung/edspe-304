import 'animate.css';

export default function Home() {
  // Number of items
  const itemCount = 10;
  // Calculate the rotation angle for each item
  const angleStep = 360 / itemCount;

  return (
    <>
    <div className="relative p-8 rounded-t-3xl max-w-4xl mx-auto shadow-lg h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  width: '18rem', // Updated width
                  height: '12rem', // Updated height
                  borderRadius: '50%',
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  marginLeft: '-9rem', // Half of the updated width
                  marginTop: '-6rem', // Half of the updated height
                }}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className='bg-red-500 h-full'>
      sdfasd
    </div>
    </>
  );
}
