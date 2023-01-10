// useState is part of React and we have to import it from there
import { useState } from "react";

function StateCounter() {
  // when called useState returns an array where
  // the first element point to the state we have stored
  // the second element is a function for changing that state
  const [countB, setCountB] = useState(10)
  
  return (
    <>
      <h1>{countB}</h1>
      {/* If you are going to use the old value give the setState function a callback */}
      <button onClick={() => setCountB((oldCount) => oldCount + 1)}>Increment</button>
      {/**
       * This is prone to bugs, due to how React tries minimize the time it has to rerender the DOM
       * read more here https://beta.reactjs.org/reference/react/useState#setstate-caveats
       */}
      <button onClick={() => setCountB(countB - 1)}>Decrement</button>
    </>
  )
}

export default StateCounter;