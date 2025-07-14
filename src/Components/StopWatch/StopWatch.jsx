import React, { useEffect, useRef, useState } from 'react'

function StopWatch() {
    const [isRunning,setRunning]=useState(false); //used at every re-render
    const [elapsedTime, setElapsedTime]=useState(0);//used useState to re-render value at UI at each instant
    const startTimeRef=useRef(0); //Since it will be used as refrence value (constant value) we use useRef
    const intervalIdRef=useRef(null); //Just a refernce identity

    useEffect(()=>{ //Only works if isRunning state changes
        console.log('hello')
        if(isRunning){
             intervalIdRef.current=setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current); //sets time elapsed wrf to startTimeRef
            }, 10);
        }
        
        return ()=>{//clearing for any abnormalities
            clearInterval(intervalIdRef.current);

        }
    
    },[isRunning])

    function startIt(){ 
        setRunning(true) 
        startTimeRef.current= Date.now()-elapsedTime;
        //reference or a constant value that will then result elapsed time
        //state only update once this block finishes
    }
    function stopIt(){
        setRunning(false)
        //simply stoping the setInterval process and showing the recent elapsedTime value
        
    }
    function resetIt(){
        setElapsedTime(0)
        setRunning(false)
        
    }
    function formatIt(){
        let mins=Math.floor(elapsedTime/(1000*60)%60);
        let secs=Math.floor(elapsedTime/(1000)%60);
        let ms=Math.floor((elapsedTime % 1000)/10);

        mins=mins.toString().padStart(2,'0');
        secs=secs.toString().padStart(2,'0');
        ms=ms.toString().padStart(2,'0');

        return `${mins}:${secs}:${ms}`

        
    }
  return (
    <div className='container'>
        <h1>{formatIt()}</h1>
        <div className='button-container'>
            <button onClick={startIt}>Start</button>
            <button onClick={resetIt}>Reset</button>
            <button onClick={stopIt}>Stop</button>
        </div>
    </div>
  )
}

export default StopWatch
