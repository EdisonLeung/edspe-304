'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `Social justice education is rooted in the belief that everyone deserves equal rights, opportunities, and respect. It seeks to confront and address inequalities in society—be it racism, sexism, ableism, classism, and more—by educating individuals about the existence and effects of these systemic oppressions.`
  return (
    <Layout imageUrl='week3.jpeg' title='Disability is an Intersection' hoverText={text}/>
  );
}
