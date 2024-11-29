import Image from 'next/image';
// import { Button } from "@/components/ui/button"
// import Link from 'next/link';
import { Ultra } from 'next/font/google'

const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin']
})

export function Intro() {
  return (
    <section id="home" className="py-8 grid place-items-center text-center">
      <Image 
        src={'/images/gully-gz-logo-blackonwhite.png'} 
        alt="Gully G'z logo" 
        width="400" 
        height="188" 
        priority={true}
      />
      <h1 className={`sr-only`}>
        Gully G&apos;z</h1>
      <h2 className={`py-4 text-3xl ${ultra.className}`}>Indie Rock with a Surf Punk Twist</h2>
    </section>
  );
}