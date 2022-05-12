import SideProfile from "../SideProfile"
import SctOne from "./SctOne"
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useState, useReducer } from "react"

const SctHome = () => {
  const [tick, setTick] = useState(0)
  const [side, setSide] = useReducer((side, action) => {
    return {isVisible: action.type, isStart: false} 
  }, {isVisible: false, isStart: true});
  return (
    <div className='SctHome'>
      <button className="btnShowSide" onClick={() => {setSide({type: true});animateProgress(tick, setTick);}}><BsThreeDotsVertical /></button>
      <div className="page-content">
        <div className="sct-holder scrollbar-look scroll-item">
          <SctOne />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
      <SideProfile side={side} setSide={setSide} tick={tick} setTick={setTick} animateProgress={animateProgress} />
    </div>
  )
}

function animateProgress(tick, setTick) {
  let counter = 0
  var ticker = setInterval(() => {
    counter > 15 ? setTick(counter = counter + 4) : setTick(counter = counter + 2)
    if (counter > 100) {console.log("test");clearInterval(ticker);}
  }, 1000/30)

  return () => clearInterval(ticker)
}

export default SctHome
