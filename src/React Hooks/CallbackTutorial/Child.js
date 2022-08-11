import React, {useEffect} from 'react'

function Child({returnComment}) {
    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
    }, [returnComment]);
  return (
    // <div>{returnComment("Buseyna")}</div>
    <div>{returnComment("Buseyna")}</div>
  )
}

export default Child