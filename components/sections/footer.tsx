import Link from 'next/link';
import { Ultra } from 'next/font/google';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook } from 'lucide-react'

const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function About() {
  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className={`text-2xl font-bold mb-2 ${ultra.className}`}>Gully G&apos;z</h3>
            <p>&copy; {new Date().getFullYear()} Gully G&apos;z. All rights reserved.</p>
          </div>
          {/* <div className="mb-8 md:mb-0">
            <h4 className={`text-xl font-semibold mb-4 ${ultra.className}`}>Join our mailing list</h4>
            
            <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted') }} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-slate-700 text-white placeholder-slate-400"
                aria-label="Email address"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div> */}
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/gullygzband/" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/gullygzband" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </Link>
            {/* <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}