import Hero from './Hero'
import Post from './Post'


export default function Home() {

        return (
            <main className="min-h-min">
                <section className="flex items-center justify-center overflow-x-auto max-w-screen">
                    <Hero></Hero>
          </section>
          <section>
              <Post></Post>
          </section>
          </main>
            
        )
    }
   

    