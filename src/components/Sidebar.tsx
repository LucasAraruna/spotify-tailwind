import { HomeIcon, Search, Library } from "lucide-react"
export function Sidebar() {
    return (
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
    )
}