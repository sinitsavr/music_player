import { useState, useEffect} from "react";

function App() {

    const [ selectedTrackId, setSelectedTrackId ] = useState(null)
    const [ tracks, setTracks ] = useState(null)


    useEffect(()=> {
        console.log('effect')
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '52fbe20e-f68a-45cb-919e-2ae311ceadfb'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))
    },[])
    if (tracks === null ) {
        return <div>
            <h1>Music Player</h1>
            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0 ) {
        return <div>
        <h1>Music Player</h1>
        <span>No Tracks</span>
    </div>
    }

  return (

<div>
    <h1>Music Player</h1>
    <button onClick={()=>{
        setSelectedTrackId(null)
    }}>reset selection</button>
    <ul>
        { tracks.map((track)=>{
            return (
                <li key={track.id} style={{
                    border: track.id === selectedTrackId ? '1px solid red' : 'none',
                }}>

                    <div onClick={()=>{
                        setSelectedTrackId(track.id)}}>
                        { track.attributes.title }
                    </div>
                    <audio src={track.attributes.attachments[0].url} controls></audio>
                </li>

            )}) }
    </ul>
</div>


  )
}

export default App
