import Image from 'next/image'
import { Ultra } from 'next/font/google';

const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function About() {
  return (
<section id="about" className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-6">
            <h2 className={`sr-only text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}>About the Band</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/gully-regal-2024.webp?height=600&width=800"
                  alt="Gully G&apos;z band members"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-xl mb-4 text-slate-700 dark:text-slate-300">
                Gully G&apos;z is a three-piece band from Long Beach, CA. Their songs are a fertile stew of indie rock and post-pop-cow-surf punk. Their combined experience from previous acts, Gully G&apos;z is about friendship and reflection on life through authentic rock and roll.
                </p>
                {/* <p className="text-lg text-slate-700 dark:text-slate-300">
                  With three platinum albums and countless sold-out shows, Gully G&apos;z continues to captivate audiences worldwide 
                  with their passion for music and unforgettable live experiences.
                </p> */}
              </div>
            </div>
          </div>
        </section>
  )
}