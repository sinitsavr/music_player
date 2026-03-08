import { useState } from "react";
import { TrackList } from "./TrackList.tsx";
import { TrackDetail } from "./TrackDetail.tsx";

export function App() {

    const [tracks] = useState([
        { id: 1, title: "Bruno Mars - Uptown Funk" },
        { id: 2, title: "Eminem - Lose Yourself" },
        { id: 3, title: "Rihanna - Diamonds" },
    ])

    const [selectedTrackId, setSelectedTrackId] = useState(1)

    const selectedTrack = tracks.find(t => t.id === selectedTrackId)

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            <TrackList items={tracks} />

            <button onClick={() => setSelectedTrackId(selectedTrackId + 1)}>
                Next
            </button>

            <hr />

            <TrackDetail track={selectedTrack} />

        </div>
    )
}