import React, { useRef, useState } from "react";
import { data } from "./AccordainData";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiselected, setMultiselected] = useState(false);
  const [multiple,setMultiple] = useState([]);

  function handleSelection(elementId) {
    setSelected(selected == elementId ? null : elementId);
  }
  function handleMultiSelection(elementId) {
    let cpyArray=[...multiple];
    if(multiple.indexOf(elementId)==-1){
        cpyArray.push(elementId)
    }
    else{
        cpyArray.splice(cpyArray.indexOf(elementId),1)
    }
    setMultiple(cpyArray)
  }
  
  return (
    <div className="container">
 
      <button
        onClick={() => setMultiselected(!multiselected)}
        className="multiselection"
      >
        MULTISELECTION
      </button>
      {data.map((element, index) => (
        <div key={index}>
          <h1 className="heading">
            {element.question}
            <button
              className="expand-btn"
              onClick={
                multiselected
                  ? () => handleMultiSelection(element.id)
                  : () => handleSelection(element.id)
              }
            >
                +
            </button>
          </h1>
          {
            multiselected ? multiple.indexOf(element.id) !== -1 && (
                <p className="para">{element.answers}</p>
              ) :
            selected == element.id && (
                <p className="para">{element.answers}</p>
        )
          }
        </div>
      ))}
    </div>
  );
}

export default Accordion;

// const [toggle,setToggle]=useState(false);
// const [objId,setObjId]=useState(null);
// function toggleFunc(selectedId){
//     setObjId(selectedId==objId? null: selectedId)
//     }

// return (
//     <div className="container">
//         {
//             data.map((element,index)=>(
//                <div key={index}>
//                 <h1 className="heading">
//                     {element.question}
//                     <button className="expand-btn" onClick={()=>toggleFunc(element.id)}>
//                         +
//                     </button>
//                 </h1>
//         {
//             objId===element.id ?
//             <p className="para">{element.answers}</p> : null
//         }
//         </div>))
//         }
//     </div>

//    )
