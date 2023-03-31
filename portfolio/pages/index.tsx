import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import profilePic from '../public/picture_of_olle.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Olle Mineur</title>
        <meta name="description" content="Olle Mineur Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="flex flex-wrap font-mono bg-gradient-to-b bg-amber-600">
        <div>
          <h1 class="font-bold">Welcome to Olle Mineur</h1>
        </div>
        <div>
          <Link href="https://github.com/Olle-Mineur" class="hover:font-serif bg-amber-400">Github</Link>
        </div>
        <div>
          <Image 
            src={profilePic} 
            alt="Picture of the author and his friends."
            height={400}
            priority
            placeholder='blur'/>
        </div>
      </main>
    </>
  )
}
