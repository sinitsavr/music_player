import {useEffect, useState} from "react";

export function TracksList(props) {

    const [tracks, setTracks] = useState(null)



    useEffect(() => {
        console.log('effect')
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))

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
        props.onTrackSelect?.(null)
    }

    return <div>
<button onClick={handleResetClick}> reset</button>
        <hr/>
    <ul>
        {tracks.map((track) => {
            const handleClick = () => {
                    props.onTrackSelect?.(track.id)
            }
            return (
                <li key={track.id} style={{
                    border: track.id === props.selectedTrackId  ? '1px solid violet' : 'none',
                }}>

                    <div onClick={handleClick}>
                        {track.attributes.title}
                    </div>
                    <audio src={track.attributes.attachments[0].url} controls></audio>
                </li>

            )
        })}
    </ul>
        </div>
}