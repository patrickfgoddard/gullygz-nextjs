import Image from 'next/image'
import Link from 'next/link'
//import { Ultra } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Ultra } from 'next/font/google';

const ultra = Ultra({ 
  weight: ['400'],
  subsets: ['latin'] 
})

export default function Music() {
  return (
    <section id="music" className="py-16 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <h2 className={`text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white ${ultra.className}`}>Our Music</h2>
            <div className="flex justify-center gap-8">
              {[
                { title: 'Attention Shoppers', cover: '/images/attentionshoppers-cover-250.jpg?width=300', spotifyLink: 'https://open.spotify.com/album/0jxXO4ntEZ5yNGkYmUTUIv?si=46zYuSe0RyiPkH9Tx33qnA', bandcampLink: 'https://gullygz.bandcamp.com/album/attention-shoppers' },
                { title: 'Eliminated', cover: '/images/eliminated-cover-250.jpg?height=300&width=300', spotifyLink: 'https://open.spotify.com/album/0jxXO4ntEZ5yNGkYmUTUIv?si=46zYuSe0RyiPkH9Tx33qnA', bandcampLink: 'https://gullygz.bandcamp.com/album/eliminated' },
                // { title: 'Midnight Serenade', cover: '/placeholder.svg?height=300&width=300', spotifyLink: '#' },
              ].map((album, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <Image
                      src={album.cover}
                      alt={`${album.title} album cover`}
                      width={300}
                      height={300}
                      className="mb-4 w-full rounded-t-lg"
                      
                    />
                    <h3 className={`text-xl font-semibold m-4 text-slate-800 dark:text-white`}>{album.title}</h3>
                    <div className="mx-4 mt-2 mb-4 flex gap-4">
                    <Button variant="outline">
                      <Link href={album.bandcampLink}>Listen on Bandcamp</Link>
                    </Button>
                    <Button variant="outline">
                      <Link href={album.spotifyLink}>Listen on Spotify</Link>
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  );
}