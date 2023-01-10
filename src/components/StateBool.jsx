import { useState } from "react"

function StateBool() {
  const [hidden, setHidden] = useState(false)

  return (
    <>
      {
        // Here we are using the logical 'OR' operator to only render the <h1> when 
        // the first part is truthy 
        !hidden &&
        <h1 style={{position: "absolute", top: "-10rem"}}>Some text</h1>
      }

      <button onClick={() => setHidden(false)}>Show</button>
      <button onClick={() => setHidden(true)}>Hide</button>
    </>
  )
}

export default StateBool