import TheLogo from './TheLogo'
import TheNav from './TheNav'
import TheFooter from './TheFooter'

function theSidebar() {
    return (
        <aside id="sidebar"
               className="bg-black w-[256px] text-[#b2b2b2] overflow-hidden flex flex-col fixed lg:sticky top-0 h-screen lg:h-auto z-30 -translate-x-full lg:translate-x-0 target:translate-x-0 transition-transform peer">
            <TheLogo />
            <TheNav />
            <TheFooter />
        </aside>
    )
}

export default theSidebar