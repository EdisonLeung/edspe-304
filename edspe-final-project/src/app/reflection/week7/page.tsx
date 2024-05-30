'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `
  students who are both disabled and belong to a racial minority may face compounded discrimination, leading to lower expectations and fewer opportunities both academically and socially
  `;
  return (
    <Layout imageUrl='week7.jpeg' title='Who Cares About Kelsey?' hoverText={text}/>
  );
}
