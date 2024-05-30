'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `
   We need to recognize and address misconcpetions and stigma. This approach involves direct engagement with the misconceptions and stigma surrounding disability. It emphasizes educating people to recognize and discard prejudiced views of disability. Some efforts include promoting the understanding of the diverse and rich lives led by people with disabilities and showing the systems that support their independence and participation in society.
  `
  return (
    <Layout imageUrl='week5.jpeg' title='Difference, Not Deficit' hoverText={text}/>
  );
}
