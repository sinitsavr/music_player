import {useEffect, useState} from "react";

export function TrackDetail() {
    const [selectedTrack, setSelectedTrack ] = useState(null)
    const selectedTrackId = '896e6fdc-7c64-46bc-8e49-4dee3e028b0f'

    useEffect(() => {
        if(!selectedTrack) return
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
            headers: {
                'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data))

    }, [selectedTrackId]);


    return  <div>
        <h2>Details</h2>
        {!selectedTrack && !selectedTrackId && 'Track is not selected'}
        {!selectedTrack && selectedTrackId && 'Loading...'}
        {selectedTrack && selectedTrackId &&  selectedTrack.id !== selectedTrackId && 'Loading...'}
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