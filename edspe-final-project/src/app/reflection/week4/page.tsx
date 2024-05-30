'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `
  What is considered a disability in one culture or economic setting may not be seen as such in another. This variability underscores the relativity of "disability" and "normal" as cultural constructs, rather than fixed or universal categories. The idea that everyone may experience disability at some point in life really highlights the fluidity of the concepts of "disability" and "normal"
  `
  return (
    <Layout imageUrl='week4.jpeg' title='Exploring Meanings of Disability in Schools' hoverText={text}/>
  );
}
