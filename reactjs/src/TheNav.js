import { HomeIcon, SearchIcon, ViewBoardsIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/outline'

function TheNav() {
    return (
        <nav>
            <a className="flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded" href="/">
                <HomeIcon className="h-6 w-6" />
                <span className="ml-4 text-sm font-semibold">Home</span>
            </a>
            <a className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300" href="/">
                <SearchIcon className="h-6 w-6" />
                <span className="ml-4 text-sm font-semibold">Search</span>
            </a>
            <a className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300 mb-6"
               href="/">
                <ViewBoardsIcon className="h-6 w-6" />
                <span className="ml-4 text-sm font-semibold">Your library</span>
            </a>
            <a className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300" href="/">
                <PlusCircleIcon className="h-6 w-6" />
                <span className="ml-4 text-sm font-semibold">Create playlist</span>
            </a>
            <a className="flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300" href="/">
                <HeartIcon className="h-6 w-6" />
                <span className="ml-4 text-sm font-semibold">Liked songs</span>
            </a>
        </nav>
    )
}

export default TheNav