function TheSidebarOverlay() {
    return (
        <a className="fixed inset-0 bg-black opacity-0 peer-target:opacity-50 pointer-events-none peer-target:pointer-events-auto z-20 peer-target:z-20 cursor-default transition-opacity lg:hidden"
           href="#main">&nbsp;</a>
    )
}

export default TheSidebarOverlay