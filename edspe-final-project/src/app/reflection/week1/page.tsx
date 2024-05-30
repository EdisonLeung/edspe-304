'use client';
import 'animate.css';
import Layout from '../Layout';

export default function Home() {
  const text = `
  Watching the TED talk "I am not your inspiration", I gained a lot more insight and was able to expand my definition of ableism. In particular the cultural context of ableism where people often use disabled people as "inspirational porn". I realized that discrimination against disabled people does not have to be construed as just exclusion but can also extend to areas such as using disabled people as something to boost people's own ego. The speaker really put into perspective how life for disabled people is difficult in ways that are not what usually people think they are. People often assume that we are disabled by our bodies but more often than not, it is society as a whole that disables us more.
  `
  return (
    <Layout imageUrl='week1.jpeg' title='Disability Studies' hoverText={text}/>
  );
}
