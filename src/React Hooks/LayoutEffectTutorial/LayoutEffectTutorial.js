import React, { useLayoutEffect, useEffect, useRef } from 'react'

// function LayoutEffectTutorial() {
//   useLayoutEffect(() => {
//     console.log("UseLayoutEffect");
//   }, [])

//   useEffect(() => {
//     console.log("UseEffect");
//   }, [])
//   return (
//     <div className='App'>LayoutEffectTutorial
//     <input ref={inputRef} value="Buseyna" styled = {{width: 400, height: 60 }}/>
//     </div>
//   )
// }

function LayoutEffectTutorial() {
  const inputRef =useRef(null);

  useLayoutEffect(() => {
    /*console.log("UseLayoutEffect");*/
    console.log(inputRef.current.value);
  }, [])

  useEffect(() => {
    /*console.log("UseEffect");*/
    inputRef.current.value = "HELLO"
  }, [])
  return (
    <div className='App'>LayoutEffectTutorial
    <input ref={inputRef} value="Buseyna" styled = {{width: 400, height: 60 }}/>
    </div>
  )
}

export default LayoutEffectTutorial