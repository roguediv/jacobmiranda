import ItemValue from "./ItemValue"
//import {motion} from "framer-motion"
import {useState} from "react"

const ProgBar = (props) => {
  var percent = props.tick < props.percent ? props.tick : props.percent
  var offset = (100 - percent)
  if (props.type == "circle") {
    offset = offset * 2.92209
    return (
      <div className='ProgBar circle'>
        <div className="bar">
          <svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7" fillOpacity="0"></path><path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7" fillOpacity="0" 
          style={{strokeDashoffset: offset}}></path></svg>
          <p className="sm dk">{percent}%</p>
        </div>
        <p className="sm">{props.text}</p>
      </div>
    )
  } else {
    return (
      <div className='ProgBar line'>
        <ItemValue pclass="sm" p2class="dk" item={props.text} value={percent + ' %'} />
        <div className="bar">
          <svg viewBox="0 0 100 1.72" preserveAspectRatio="none"><path d="M 0,0.86 L 100,0.86" stroke="#eee" strokeWidth="1.72" fillOpacity="0"></path><path d="M 0,0.86 L 100,0.86" stroke="#555" strokeWidth="1.72" fillOpacity="0" 
          style={{strokeDashoffset: offset}} 
          //animate={{strokeDashoffset: [100, (100 - props.percent)]}}
          ></path></svg>
        </div>
      </div>
    )
  }
}

export default ProgBar
