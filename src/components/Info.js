import React, {useState} from 'react';
import '../App.css'


const Info = ({ info }) => {
    let [color, setColor] = useState(false)
    return (
        <React.Fragment>
            <div className={!color? "abc": "def"}>
                <h1>Hello {info}</h1>
                <br/>
                <button
                    onClick ={()=>setColor(!color)}
                >Change color</button>
            </div>
            
        </React.Fragment>
    )
}

export default Info