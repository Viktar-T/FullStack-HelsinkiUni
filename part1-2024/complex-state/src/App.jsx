import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])

  const handleClicks = (lr) => {
    let newObj;
    if (lr === "left") {
      newObj = {left: clicks.left + 1, right: clicks.right}
      setAll(allClicks.concat("L"))
    } else {
      newObj = {left: clicks.left, right: clicks.right + 1}
      setAll(allClicks.concat("R"))
    }
      return newObj
  };

  const handleClicks2 = (lr) => {
    let newObj;
    if (lr === "left") {
      newObj = {...clicks, left: clicks.left + 1,}
      setAll(allClicks.concat("L"))
    } else {
        newObj = {...clicks, right: clicks.right + 1}
        setAll(allClicks.concat("R"))
      }
      setClicks(newObj)
  };

  const handleLeftClick = () => {
    const newClick = {left: clicks.left + 1, right: clicks.right}
    setAll(allClicks.concat("L"))
    setClicks(newClick)
  }

  console.log("clicks: ", clicks)

  return (
    <div>
      {clicks.left}
      <button onClick={() => setClicks(handleClicks("left"))}>Left</button>
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={() => handleClicks2("left")}>Left</button>
      <button onClick={() => setClicks(handleClicks("right"))}>Right</button>
      {clicks.right}  
      <p>{allClicks.join("->")}</p>

    </div>
    
  )
}

export default App
