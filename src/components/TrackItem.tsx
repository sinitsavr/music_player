type Props = {
    isSelected: boolean,
    onSelect: (trackId: string) => void,
}

export function TrackItem({onSelect, track, isSelected }: Props) {
    const handleClick = () => onSelect?.(track.id)

    return (

        <li key={track.id} style={{
            border: isSelected ? '1px solid violet' : 'none',
        }}>

            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    )
}