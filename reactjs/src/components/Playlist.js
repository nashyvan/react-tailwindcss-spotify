import {useState} from 'react'

import PlaylistCover from './PlaylistCover'
import PlaylistButtonPlay from './PlaylistButtonPlay'
import PlaylistTitle from './PlaylistTitle'
import PlaylistDescription from './PlaylistDescription'
import PlaylistContextMenu from './PlaylistContextMenu'

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

function Playlist({classes, coverUrl, title, description}) {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

    function openContextMenu(event) {
        event.preventDefault()
        setIsContextMenuOpen(true)
    }

    function closeContextMenu() {
        setIsContextMenuOpen(false)
    }

    return (
        <a className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`} href="/"
           onContextMenu={ openContextMenu } onClick={ (event) => event.preventDefault() }>
            <div className="relative">
                <PlaylistCover url={ coverUrl }/>
                <PlaylistButtonPlay/>
            </div>
            <PlaylistTitle title={ title }/>
            <PlaylistDescription description={ description }/>
            {isContextMenuOpen && (
                <PlaylistContextMenu menuItems={ menuItems }
                                     onClose={ closeContextMenu }
                                     classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default divide-y divide-[#3e3e3e] whitespace-nowrap z-10"
                />
            )}
        </a>
    )
}

export default Playlist