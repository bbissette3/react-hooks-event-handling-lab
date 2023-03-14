// Code EyesOnMe Component Here
import React from 'react'

    function handleButtonFocus () {
        console.log("Good!")
    }

    function handleButtonBlur() {
        console.log("Hey! Eyes on me!")
    }

 function EyesOnMe() {
  return (
    <div>
        <button onFocus={handleButtonFocus} onBlur={handleButtonBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;