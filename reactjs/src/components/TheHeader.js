import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from '@heroicons/react/outline'
import TheButtonRegister from './TheButtonRegister'
import TheButtonLogin from './TheButtonLogin'

function TheHeader() {
    return (
        <header
            className="bg-[#070707] flex flex-1 justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
            <div className="flex">
                <a className="text-[#969696] mr-[8px] p-1 -ml-1.5 inline-block lg:hidden" href="#sidebar">
                    <MenuIcon className="h-6 w-6" />
                </a>
                <a className="text-[#969696] mr-[8px] p-1 cursor-not-allowed" href="/">
                    <ChevronLeftIcon className="h-6 w-6" />
                </a>
                <a className="text-[#969696] ml-[8px] p-1 cursor-not-allowed" href="/">
                    <ChevronRightIcon className="h-6 w-6" />
                </a>
            </div>
            <div>
                <TheButtonRegister />
                <TheButtonLogin />
            </div>
        </header>
    )
}

export default TheHeader