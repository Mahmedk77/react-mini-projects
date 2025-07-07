import React, { useState } from "react"

function ColorGenerator(){

    const [hexColor,setColor]=useState('#000000')
    const [hexBool,setBool]=useState(true)

    function generateHex(){
        // const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); use this or the below one
        let randomHex='';
        const arr=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        for(let i=0;i<6;i++){
            randomHex += arr[Math.floor(Math.random()*arr.length)];
        }
        randomHex='#'+randomHex;
        setColor(randomHex)
    }
    function generateRgb(){
        let rgb="rgb"+"("+ Math.floor((Math.random()*255))+","+ Math.floor((Math.random()*255))+","+ Math.floor((Math.random()*255))+")"
        setColor(rgb)
    }
    return(
        <div className="container" style={{backgroundColor:`${hexColor}`}}>
           <div>
           <button onClick={()=>setBool(true)}>
                Generate Hex Color
            </button>
            <button onClick={()=>setBool(false)}>
                Generate rgb
            </button>   
            <button onClick={
            hexBool
            ? ()=>generateHex()
            : ()=>generateRgb()
            }>
                Generate Random Color
            </button>
           </div>
            {
                hexBool
                ? <h3>HEX COLOR</h3>
                : <h3>RGB COLOR</h3>
            }
            <h1 className="heading">
                {
                hexColor
                }
            </h1>

        </div>
    )

}

export default ColorGenerator