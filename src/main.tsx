import {createRoot} from 'react-dom/client'
import './index.css'
import {Header} from "./components/Header.tsx";
import {SideBarMenu} from "./components/SideBarMenu.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {TracksList} from "./components/TracksList.tsx";
import {TrackDetail} from "./components/TrackDetail.tsx";
import {Footer} from "./components/Footer.tsx";


const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!);

reactRoot.render(<MainPage/>)

function MainPage() {
    return <div>
        <Header />
        <SideBarMenu />
        <PageTitle />
        <div style={{display: 'flex'}}>
           <TracksList />
           <TrackDetail />
        </div>
        <Footer />
    </div>
}


