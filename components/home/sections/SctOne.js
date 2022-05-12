import Image from "next/image"
import GenBtn from "../../global/GenBtn"
import ItemValue from "../ItemValue"
import InfoBox from "../InfoBox"
import observeElement from "../../global/functions/observeElement"
import { useRef, useEffect, useState } from "react"

const SctOne = () => {
  const headerH1 = useRef(null)
  const [headerPMaxwidth, setHeaderPMaxwidth] =  useState(600)

  useEffect(() => {
    headerH1.current != null ? setHeaderPMaxwidth(headerH1.current.offsetWidth) : setHeaderPMaxwidth(600)
    const observer1 = observeElement(".trigger1", (e) => {
      document.querySelector('.SctOne .action1').classList.add("animate")
      document.querySelector('#scroll-nav .active').classList.remove("active")
      document.querySelector('#scroll-nav :nth-child(1)').classList.add("active")
    })
    setTimeout(() => {document.querySelector('.SctOne').classList.add("animate")}, 250)
    return () => {observer1.disconnect()}
  }, [])

  return (
    <div className='SctOne sct'>
      <div className="trigger1"></div>
      <div className="bg-main">
        <Image alt="background1" src="/images/bg_mtns.jpg" width={795} height={520} priority />
      </div>
      <div className="header" >
        <div className="img bg">
          <Image alt="background2" src="/images/bg_mtns.jpg" width={795} height={520} priority />
        </div>
        <div className="content">
          <div className="img-hldr">
            <div className="img fg">
              <Image alt="Picture of Jacob" src="/images/him.png" width={524} height={530} priority/>
            </div>
          </div>
          <div className="text">
            <h1 ref={headerH1} onMouseDown={(e) => {setHeaderPMaxwidth(headerH1.current.offsetWidth)}}>I Design Beautiful Websites</h1>
            <p className="lg" style={{maxWidth:headerPMaxwidth,}}>Jacob Miranda is a full stack web developer with an intuition for solving complex problems and working with computers. This page includes some of the work he has produced.</p>
            <GenBtn className="lg" text="Let's Get Started..." href="#scroll-1" />
          </div>
        </div>
      </div>
      <div className="header-info">
        <ItemValue item="10+" value="Years of Experience" />
        <ItemValue item="23" value="Completed Projects" />
        <ItemValue item="15" value="Blogs Posted" />
        <ItemValue item="∞" value="Dreams Created" />
      </div>
      <div className="InfoBox-hldr action1" id="scroll-1">
        <InfoBox title="Hello There!" content={
          [
            "My name is Jacob Miranda. I'm the senior developer of Orbit, a software company based in Florida. I've been programming websites since I was 12 years old. I started programming because it's always been my dream to design video games. My first development tools were GameMaker Studios, NewGrounds and Roblox. I dabbled in HTML and CSS out of curiosity and made fun websites that represented my interests.", 
            "Today, I've been programming for 11 years. I'm a great problem solver and have an intuition for talking to computers. I've created game engines and have great ideas, but I have yet to release my games. I want to learn as much as possible so I can inspire people in the same way I was.",
          ]
          } buttonText={['Read More About Me', 'Download My Resume']}/>
          <div className="info-items">
            <InfoBox title="Improving Designs" content={["Jacob is very detail oriented in my projects. He's constantly asking, \"How can this be better?\" He goes to great lengths to make his product efficient and beautiful. As an entrepreneur, there is no structure for him to follow. He must create my own systems that meet his standards."]} icon="BsGearFill" />
            <InfoBox title="Video Game Fame" content={["Jacob's passion for programming started on Roblox. Roblox is a website where kids can build games for other kids using a blender-like platform and lua. Jacob created three games that claimed the most popular spot on Roblox. Each game earned over half a million visits. As a 12 year old, this opened Jacob's mind to his potential."]} icon="FaGamepad" />
            <InfoBox title="Better Together" content={["As a natural introvert who spends much of his time insides his own head, Jacob had to learn that he can't do everything alone. That's why Jacob made this website. He's hoping that likeminded individuals will be inspired by his work and share their passion with the world."]} icon="FaPeopleCarry" />
          </div>
      </div>
    </div>
  )
}

const InfoBar = (props) => {
  return (
    <div className="InfoBar">

    </div>
  )
}

export default SctOne
