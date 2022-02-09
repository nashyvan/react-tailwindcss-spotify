import PlaylistContextMenuItem from "./PlaylistContextMenuItem";

const menuItems = [
    {
        label: 'Add to your library'
    },
    {
        label: 'Share',
        subMenuItems: [
            {
                label: 'Copy link to playlist'
            },
            {
                label: 'Embed playlist'
            }
        ]
    },
    {
        label: 'About recommendations'
    },
    {
        label: 'Open in Desktop app'
    },
]

function PlaylistContextMenu() {
    return (
        <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default divide-y divide-[#3e3e3e] whitespace-nowrap z-10 hidden group-hover:block">
            {
                menuItems.map(({ label, subMenuItems }) => (
                    <PlaylistContextMenuItem key="{ label }" subMenuItems={ subMenuItems }>{ label }</PlaylistContextMenuItem>
                ))
            }
        </ul>
    )
}

export default PlaylistContextMenu