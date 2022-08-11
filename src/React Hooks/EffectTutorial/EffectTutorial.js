import React, { useEffect, useState } from 'react'
import axios from "axios";

function EffectTutorial() {
    /* in case we want to display a part of data in our screen */
    const [data, setData] = useState("");
    /* another state as an example with count*/
    const [count, setCount] = useState(0);
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)  => {
      setData(response.data[0].email);
        // console.log(response.data);
    })
  /* console.log("effectTutorial"); */

   }, [])

  return (
    <div>Hello World
      <div>{data}</div> 
      <div>{count}</div>
      <button onClick={() =>{
        setCount(count +1);
      }}>
      Click Here
      </button>
    </div>
  )
}

export default EffectTutorial