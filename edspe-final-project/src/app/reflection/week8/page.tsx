'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = 
  `
  Commitment to Cross-Disability Solidarity and Leadership of the Most Impacted to create a more inclusive and equitable classroom environment.
  `
  return (
    <Layout imageUrl='week8.jpeg' title='Disability Justice Principles' hoverText={text}/>
  );
}
