'use client'

import Script from 'next/script'
import { Source_Sans_3 } from 'next/font/google'
import { Intro } from '@/components/sections/intro'
import Shows from '@/components/sections/shows/shows'
import Music from '@/components/sections/music'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'


const sourceSansPro = Source_Sans_3({ weight: ['400', '600'], subsets: ['latin'] })

export function BlockPage() {
  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-900 ${sourceSansPro.className}`}>
      {/* <header className="bg-slate-900 dark:bg-slate-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold text-white dark:text-white ${ultra.className}`}>Gully G&apos;z</div>
            <div className="hidden md:flex space-x-4">
              <Link href="#home" className="text-white dark:text-white hover:text-slate-600 dark:hover:text-slate-300">Home</Link>
              <Link href="#shows" className="text-white dark:text-white hover:text-slate-600 dark:hover:text-slate-300">Shows</Link>
              <Link href="#music" className="text-white dark:text-white hover:text-slate-600 dark:hover:text-slate-300">Music</Link>
              <Link href="#about" className="text-white dark:text-white hover:text-slate-600 dark:hover:text-slate-300">About</Link>
            </div>
          </div>
        </nav>
      </header> */}

      <main>
        <Intro />
        <About />
        <Shows />
        <Music />
        {/* <Contact /> */}
      </main>

     <Footer />
    </div>
  )
}