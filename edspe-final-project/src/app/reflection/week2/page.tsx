'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `Humanity depends on social recognition, as do all other forms of meaning. Only humans can decide the meaning of a thing, including a word like “human.” - Michael Bérubé`
  return (
    <Layout imageUrl='week2.jpeg' title='Constructions of Disability' hoverText={text}/>
  );
}
