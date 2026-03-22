import {createRoot} from 'react-dom/client'
import './index.css'
import {useState} from "react";
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetail} from "./components/TrackDetail.tsx";
import {Footer} from "./components/Footer.tsx";



const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);

reactRoot.render(<Main/>)

function Main() {

    const [trackId, setTrackId] = useState<Array | null>(null)
    const handleTrackSelect = (id )=>{
        setTrackId(id)
    }
    return <div>
        <div style={{display: 'flex', gap: '40px'}}>
           <TracksList
               selectedTrackId={trackId}
               onTrackSelect={
               handleTrackSelect}
                       />
           <TrackDetail trackId={trackId}/>
        </div>
        <Footer />
    </div>
}


