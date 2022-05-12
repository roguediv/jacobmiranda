import GenBtn from "../global/GenBtn"
import Image from "next/image"
import ItemValue from "./ItemValue"
import ProgBar from "./ProgBar"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { AiFillLinkedin, AiFillCloseCircle } from "react-icons/ai"
import { FaCheck } from 'react-icons/fa'
import { useState, useEffect } from "react"

/// This is the side profile for the home page.

const SideProfile = (props) => {
  const [showAvailability, setShowAvailability] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      props.animateProgress(props.tick, props.setTick)
    }, 250)
  }, [])

  return (
    <div className={"side-profile" + (props.side.isStart ? " hide" : "") + (props.side.isVisible ? " open" : " closed")} >
      <div className="top">
        <button className="side-close" onClick={() => {props.setSide({type: false})}}><AiFillCloseCircle /></button>
        <div className="img-hldr">
          <div className="img">
            <Image src="/images/profile.jpg" width={90} height={90}></Image>
          </div>
          <div className="availability vis" onMouseEnter={() => {setShowAvailability(true);}} onMouseLeave={() => {setShowAvailability(false)}}></div>
          { showAvailability && <p className="availability text sm dk">Jacob is currently not available for freelance work.</p>}
        </div>

        <h4>Jacob Miranda</h4>
        <p className="sm dk">Programmer and Entrepreneur</p>
      </div>
      <div className="about">
        <div className="holder scrollbar-look">
          <div className="sd-sct">
            <ItemValue pclass="sm" p2class="dk" item="Residence:" value="USA" />
            <ItemValue pclass="sm" p2class="dk" item="State:" value="Florida" />
            <ItemValue pclass="sm" p2class="dk" item="Age:" value="23" />
          </div> 
          <div className="sct-skills-1 sd-sct">
            <h4>Skills</h4>
            <div className="items">
              <ProgBar tick={props.tick} text="WebDev" percent={99} type="circle" />
              <ProgBar tick={props.tick} text="Marketing" percent={80} type="circle" />
              <ProgBar tick={props.tick} text="AppDev" percent={72} type="circle" />
            </div>
          </div>
          <div className="sct-skills-2 sd-sct">
            <h4>Programming Experience</h4>
            <ProgBar tick={props.tick} text="HTML" percent={100}/>
            <ProgBar tick={props.tick} text="CSS" percent={100}/>
            <ProgBar tick={props.tick} text="JavaScript" percent={92}/>
            <ProgBar tick={props.tick} text="PHP" percent={100}/>
            <ProgBar tick={props.tick} text="SQL" percent={95}/>
            <ProgBar tick={props.tick} text="Python" percent={82}/>
            <ProgBar tick={props.tick} text="C#" percent={58}/>
            <ProgBar tick={props.tick} text="Java" percent={52}/>
            <ProgBar tick={props.tick} text="Swift/Obj-C" percent={72}/>
          </div>
          <div className="sct-skills-3 sd-sct">
            <h4>Knowledge</h4>
            <Skills3Item text="Using and Managing Databases" />
            <Skills3Item text="Adobe Creative Cloud" />
            <Skills3Item text="Sass, Bootstrap, TypeScript" />
            <Skills3Item text=".Net Core, Microsoft Frameworks" />
            <Skills3Item text="Next.js, jQuery, Node.js, React" />
          </div>
          <GenBtn text="View My Blog" />
        </div>
      </div>
      <div className="footer">
        <div>
          <p className="sm"><a href="#">Download PDF</a></p>
          <ul className="external">
            <li><a href="https://google.com" target="_blank"><BsFacebook /></a></li>
            <li><a href="https://google.com" target="_blank"><BsInstagram /></a></li>
            <li><a href="https://google.com" target="_blank"><AiFillLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Skills3Item(props) {
  return (
    <div className="i">
    <FaCheck />
    <p className="sm dk">{props.text}</p>
  </div>
  )
}

export default SideProfile
