import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
    const [hover,setHover]=useState(0);
    const [rating,setRating]=useState(0);
    function hoverEvent(index){
        setRating(0)
        setHover(index)
    }
    function clickEvent(index){
        setRating(index);
    }
    return(   
    <div>
    {
        [...Array(noOfStars)].map((_,index)=>{
            index ++;
            return <FaStar onMouseEnter={()=>hoverEvent(index)}
            onMouseLeave={()=>setHover(0)}
            className={index<=(hover||rating)?'active':'inactive'}
            onClick={()=>clickEvent(index)}
            />;
        })}
    </div>
    )}
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   function handleClick(getCurrentIndex) {
//     setRating(getCurrentIndex);
//   }

//   function handleMouseEnter(getCurrentIndex) {
//     setHover(getCurrentIndex);
//   }

//   function handleMouseLeave() {
//     setHover(rating);
//   }

//   return (
//     <div className="star-rating">
//       {[...Array(noOfStars)].map((_, index) => {
//         index += 1;

//         return (
//           <FaStar
//             key={index}
//             className={index <= (hover || rating) ? "active" : "inactive"}
//             onClick={() => handleClick(index)}
//             onMouseMove={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave()}
//             size={40}
//           />
//         );
//       })}
//     </div>
//   );
// }