'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const title = 'Pakistani Disabled Women-led Activism with Abia Akram & Zahida Hameed Qureshi';
  const text = 'Despite facing a society that actively hindered access to basic rights for disabled individuals, Abia Akram and Zahida Hameed Qureshi demonstrated that we can create a space for ourselves and others to advocate for the rights of disabled individuals. Their work shows that we can create a more inclusive society for anyone in any environment.'
  return (
    <Layout imageUrl='week6.jpeg' title={title} hoverText={text}/>
  );
}
