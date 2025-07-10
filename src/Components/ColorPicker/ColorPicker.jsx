import { useState } from "react"

function ColorPicker(){
    
    const [color,setColor]=useState('#FFFFFF')
    const handleColorChange= (e)=>{
        setColor(e.target.value);

    }
    const [count,setCount]=useState(0);
    return(
        <>
            <div>
                <h1>COLOR PICKER</h1>
                <div className="container" style={{backgroundColor:color}}>    
                <p>Selected Color:{color}</p>
                </div>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </>
    )
}
export default ColorPicker