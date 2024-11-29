import { Ultra } from 'next/font/google';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Contact() {
  return (
    <section id="music" className="py-16 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}>Contact Us</h2>
        
        <form 
          className="text-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action="https://formspree.io/f/xanwevpo"
          method="POST"
        >
          <div className="mb-4">
            <label className="text-2xl">
              Email
            </label>
            <Input
                type="email"
                placeholder="Enter your email"
                required
                className="text-2xl"
                aria-label="Email address"
              />
          </div>
          <div className="mb-6">
            <label className={`text-2xl`}>
              Your Message
            </label>
            <Textarea
              placeholder="Enter your message"
              required
              aria-label="Your message"
              name="message"
              />
          </div>
          <div className="mb-6">
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-2xl"
              >
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}