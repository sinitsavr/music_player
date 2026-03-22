import { useEffect, useState} from "react";
import {getTrack, type TrackDetailsResource } from "../dal/api.ts";



type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {
   const [selectedTrack, setSelectedTrack ] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if(!trackId) {
            setSelectedTrack(null)
            return
        }
        const promise = getTrack(trackId)
            promise.then(json => setSelectedTrack(json.data))

    }, [trackId]);


    return  <div>
        <h2>Details</h2>
        {!selectedTrack && !trackId && 'Track is not selected'}
        {!selectedTrack && trackId && 'Loading...'}
        {selectedTrack && trackId &&  trackId !== trackId && 'Loading...'}
        { selectedTrack && <div>
            <h3>{selectedTrack.attributes.title }</h3>
            <h4>Lyrics</h4>
            <p>
                {selectedTrack.attributes.lyrics ?? 'No Lyrics'}
            </p>
        </div>
        }
    </div>


}