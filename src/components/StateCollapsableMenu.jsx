import { useState } from "react"

function StateCollapsableMenu(props) {
  // Destructure incomming props
  const {children} = props

  const [hover, setHover] = useState(false)

  return (
    <div
      style={{
        position: "relative"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1
      >Menu</h1>
      <div
        className={"floating " + (hover ? "" : "hidden")}
      >
        {children}
      </div>
    </div>
  )
}

export default StateCollapsableMenu