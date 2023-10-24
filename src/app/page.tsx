import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>

            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>

            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>

            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Linkin Park - Hybrid Theory</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Linkin Park - Meteora</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Metal Rock e afins</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Eletrohits</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Pegando Pesado</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Nu Metal Era</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>All New Metal</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Heavy Metal</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hip Hop Club Bangers</a>

          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'> Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/fearofthedark.jpg" width={120} height={120} alt='Capa do Album Fear Of The Dark da Banda Iron Maiden' />

              <strong>Fear Of The Dark</strong>
            </div>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/meteora.jpg" width={120} height={120} alt='Capa do Album Meteora da banda Linkin Park' />
              <strong>Meteora</strong>
            </div>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/hybridtheory.jpg" width={120} height={120} alt='Capa do Album Hybrid Theory da Banda Linkin Park' />

              <strong>Hybrid Theory</strong>
            </div>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/masterofpuppets.jpg" width={120} height={120} alt='Capa do Album Master Of Puppets da Banda Metallica' />
              <strong>Master Of Puppets</strong>
            </div>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/waristheanswer.jpg" width={120} height={120} alt='Capa do Album War is The Answer da Banda Five Finger Death Punch' />
              <strong>War is The Anwser</strong>
            </div>
            <div className='bg-white/10 rounded flex items-center gap-4 overflow-hidden'>
              <Image src="/askingalexandria.jpg" width={120} height={120} alt='Capa do Album Asking Alexandria da Banda Asking Alexandria' />

              <strong>Asking Alexandria</strong>
            </div>

          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
