function NavItem({ classes, icon, children: label }) {
    return (
        <a className={ classes } href="/">
            { icon }
            <span className="ml-4 text-sm font-semibold">{ label }</span>
        </a>
    )
}

export default NavItem