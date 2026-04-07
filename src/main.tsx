import {createRoot} from 'react-dom/client'
import './index.css'
import {TracksList} from "./ui/TracksList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {Footer} from "./ui/Footer.tsx";
import {useTrackSelection} from "./bll/useTrackSelection.tsx";

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);

reactRoot.render(<Main/>)

function Main() {

    const {trackId, setTrackId} = useTrackSelection()
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


