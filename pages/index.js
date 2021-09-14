import Head from 'next/head';
import Navigator from '../components/Navigator';
import Image from 'next/image';
import profileCard from '../public/img/card.png'; //profile card path

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
          <Image src={profileCard}/>
      </div>
      <div className="container m-auto">
        <div className="text-3xl text-center p-4 py-32 bg-white">
          <p>This is a blog introducing about myself!</p>
        </div>
      </div>
    </div>
  )
}

