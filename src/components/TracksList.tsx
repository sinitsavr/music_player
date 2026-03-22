import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";
import {getTracks, type TrackListItemResource} from "../dal/api.ts";



type Props = {
    selectedTrackId: string | null,
    onTrackSelect: (id: string | null) => void
}
export function TracksList({selectedTrackId,onTrackSelect}: Props) {

    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null)



    useEffect(() => {
        console.log('effect')

            getTracks().then(json => setTracks(json.data))

    }, [])

    if (tracks === null) {
        return <div>

            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>

            <span>No Tracks</span>
        </div>
    }

    const handleResetClick  = ()=> {
        onTrackSelect?.(null)
    }
    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)}
    return <div>
<button onClick={handleResetClick}> reset</button>
        <hr/>
    <ul>
        {tracks.map((track) => {
            return (

<TrackItem key={track.id}
track={track}
           isSelected={track.id === selectedTrackId}
selectedTrackId={selectedTrackId}
onSelect={handleClick}
/>
            )
        })}
    </ul>
        </div>
}

