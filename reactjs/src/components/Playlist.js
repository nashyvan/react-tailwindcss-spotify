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

function Playlist({ classes, coverUrl, title, description }) {
    return (
        <a className={ classes } href="/">
            <div className="relative">
                <PlaylistCover url={ coverUrl } />
                <PlaylistButtonPlay />
            </div>
            <PlaylistTitle title={ title } />
            <PlaylistDescription description={ description } />
            <PlaylistContextMenu menuItems={ menuItems } classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default divide-y divide-[#3e3e3e] whitespace-nowrap z-10 hidden group-hover:block" />
        </a>
    )
}

export default Playlist