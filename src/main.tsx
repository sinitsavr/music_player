import {createRoot} from 'react-dom/client'
import './index.css'
import {useState} from "react";
import {Header} from "./components/Header.tsx";
import {SideBarMenu} from "./components/SideBarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetail} from "./components/TrackDetail.tsx";
import {Footer} from "./components/Footer.tsx";
import {App} from "./App.tsx";
import {Game} from "./game.tsx";


const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);

reactRoot.render(<Main/>)

function Main() {

    const [trackId, setTrackId] = useState(null)

    return <div>
        {/*<Game />*/}
        {/* <App/>*/}

        {/*<Header />*/}
        {/*<SideBarMenu />*/}
        {/*<PageTitle />*/}
        <div style={{display: 'flex', gap: '40px'}}>
           <TracksList
               selectedTrackId={trackId}
               onTrackSelect={
               (id)=>{
               setTrackId(id)
           }}
                       />
           <TrackDetail trackId={trackId}/>
        </div>
        <Footer />
    </div>
}


