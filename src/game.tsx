import {useState} from "react";

export function Game() {
    const [activePage, setActivePage] = useState('counter');
const handleFinish = () => {setActivePage('elephant')}
    return (
        <div>
            {activePage === 'counter' && <Counter onFinish={handleFinish}/>}
            {activePage === 'elephant' && <Elephant />}
        </div>
    )
}

function Counter (props){
    const [value, setValue] = useState(1)
    const handlerClick = () => {
        setValue(value + 1)
        if(value +1 === 5 && props.onFinish){
            props.onFinish()
        }
    }
    return <div>
        <button onClick={handlerClick}>+{value}</button>
    </div>
}
function Elephant () {
    return <div style={{fontSize: '200px'}}>🐘</div>

}