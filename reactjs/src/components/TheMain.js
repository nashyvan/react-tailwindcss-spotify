import Playlist from './Playlist'

const playlist = {
    coverUrl: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
    title: 'Playlist title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, illo?',
}

function TheMain() {
    return (
        <main className="text-white relative">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit amet.</a>
                            </h2>
                        </div>
                        <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                           href="/">See all</a>
                    </div>
                    <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <Playlist { ...playlist } classes="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group" />
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/112f23/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/6123ef/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit.</a>
                            </h2>
                            <p className="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit amet,
                                consectetur.</p>
                        </div>
                        <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                           href="/">See all</a>
                    </div>
                    <div
                        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                            <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default divide-y divide-[#3e3e3e] whitespace-nowrap z-10 hidden group-hover:block">
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                                        to your library
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                             fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                    <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                                        <li>
                                            <button
                                                className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy
                                                link to playlist
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed
                                                playlist
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
                                        recommendations
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
                                        in Desktop app
                                    </button>
                                </li>
                            </ul>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/112f23/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/6123ef/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor.</a>
                            </h2>
                            <p className="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit amet,
                                consectetur.</p>
                        </div>
                        <a className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6"
                           href="/">See all</a>
                    </div>
                    <div
                        className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                            <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default divide-y divide-[#3e3e3e] whitespace-nowrap z-10 hidden group-hover:block">
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                                        to your library
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                                        Share
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                             fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                    <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                                        <li>
                                            <button
                                                className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy
                                                link to playlist
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed
                                                playlist
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
                                        recommendations
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
                                        in Desktop app
                                    </button>
                                </li>
                            </ul>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/112f23/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/6123ef/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                        <a className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block"
                           href="/">
                            <div className="relative">
                                <img className="rounded shadow-lg"
                                     src="https://fakeimg.pl/600/753421/fff?text=Cover&font=lobster"
                                     alt=""/>
                                <button
                                    className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                            <h3 className="mt-4 mb-4 font-semibold tracking-widest capitalize">Playlist
                                title</h3>
                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. Dolor, illo?</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TheMain