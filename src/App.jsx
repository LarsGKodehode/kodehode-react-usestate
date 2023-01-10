// CSS
import './App.css'

// Components
import StateBool from './components/StateBool'
import StateCounter from './components/StateCounter'
import StateCollapsableMenu from './components/StateCollapsableMenu'

function App() {

  return (
    <div className="App" style={{position: "relative"}}>

      {/* <StateBool />
      <StateCounter /> */}

      <StateCollapsableMenu>
        <h2>First</h2>
        <h2>Second</h2>
        <h2>Third</h2>
      </StateCollapsableMenu>

    </div>
  )
}

export default App
