import { useState } from 'react'
import {} from "./components/hello"

function App() {
  const [clicksObj, setClicksObj] = useState({left: 0, right: 0})
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    console.log("Left before:", clicksObj.left)
    const updatedLeft = {
        ...clicksObj,
        left: clicksObj.left + 1,
      }
    setClicksObj(updatedLeft);
    console.log("Left after:", clicksObj.left)
    setTotal(updatedLeft.left + clicksObj.right)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    setClicksObj(
      {
        ...clicksObj,
        right: clicksObj.right + 1
      }
    );
    setTotal(clicksObj.left + clicksObj.right)
  }


  return (
    <>
      <button onClick={handleLeftClick}>{clicksObj.left} Left</button>
      <button onClick={handleRightClick}>Right {clicksObj.right}</button>
      <p>Click History: {allClicks.join(",")}</p>
      <p>Total Click num: {total}</p>
      <p>Total Click num: {allClicks.length}</p> 
    </>
    
  )
}

export default App
