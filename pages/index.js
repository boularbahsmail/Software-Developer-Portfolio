import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>John Doe - Software Developer</title>
        <meta name="description" content="Software developer portfolio using Next.js & tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
