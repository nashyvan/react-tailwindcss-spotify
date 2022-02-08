function FooterListItem({ children: label }) {
    return (
        <li>
            <a className="text-[11px] hover:underline py-2" href="/">
                { label }
            </a>
        </li>
    )
}

export default FooterListItem