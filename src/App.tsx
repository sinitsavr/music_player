import {useState, useEffect} from "react";

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [tracks, setTracks] = useState(null)
    const [selectedTrack, setSelectedTrack ] = useState(null)

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
            <h1>Music Player</h1>
            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Music Player</h1>
            <span>No Tracks</span>
        </div>
    }

    return (

        <div>
            <h1>Music Player</h1>
            <button onClick={() => {
                setSelectedTrackId(null)
                setSelectedTrack(null)
            }}>reset selection
            </button>
            <div style={{
                display: 'flex',
                gap: "10px"
            }}>
                <ul>
                    {tracks.map((track) => {

                        return (
                            <li key={track.id} style={{
                                border: track.id === selectedTrack?.id  ? '1px solid red' : 'none',
                            }}>

                                <div onClick={() => {
                                   // setSelectedTrackId(track.id)

                                    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id, {
                                        headers: {
                                            'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
                                        }
                                    }).then(res => res.json())
                                        .then(json => setSelectedTrack(json.data))

                                }}>
                                    {track.attributes.title}
                                </div>
                                <audio src={track.attributes.attachments[0].url} controls></audio>
                            </li>

                        )
                    })}
                </ul>
                <div>
                    <h2>Details</h2>
                    {selectedTrack === null
                        ? 'Track is not selected'
                        : <div>
                            <h3>{selectedTrack.attributes.title }</h3>
                            <h4>Lyrics</h4>
                            <p>
                                {selectedTrack.attributes.lyrics ?? 'No Lyrics'}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>


    )
}

export default App
