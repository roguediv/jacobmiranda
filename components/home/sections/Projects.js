import InfoBox from "../InfoBox"
import observeElement from "../../global/functions/observeElement"
import { useEffect } from "react"

function Projects() {
  useEffect(() => {
    const observer1 = observeElement('.Projects .trigger3', (e) => {
      document.querySelector(".Projects").classList.add("animate")
      document.querySelector('#scroll-nav .active').classList.remove("active")
      document.querySelector('#scroll-nav :nth-child(3)').classList.add("active")
    })
    const observer2 = observeElement('.Projects .trigger4', (e) => {
      document.querySelector(".ani2").classList.add("animate")
      document.querySelector(".ani3").classList.add("animate")
      e.disconnect()
    })
    // const observer3 = observeElement('.Projects .trigger5', (e) => {
    //   document.querySelector(".ani4").classList.add("animate")
    //   document.querySelector(".ani5").classList.add("animate")
    //   e.disconnect()
    // })
    return () => {observer1.disconnect();observer2.disconnect();}//observer3.disconnect();}
  }, []) 
  return (
    <div className='Projects sct' id="scroll-3">
      <h2>Projects.</h2>
      <div className="trigger3"></div>
      <div className="trigger4"></div>
      <div className="trigger5"></div>
      <div className="InfoBox-hldr">
        <div className="info-items-lg">
          <InfoBox href="article/onlyfavor" image="/images/onlyfavor/onlyfavorLogin.jpg" title="Content Sharing Web App" content={["Click here to view how the website Onlyfavor functions"]} />
          <InfoBox href="article/jacobmiranda" image="/images/jacobmiranda.jpg" title="Jacob Miranda's Portfolio Website" content={["Click here to view Jacob's portfolio website description"]} />
          <InfoBox className="ani2" href="article/leadingorbits" image="/images/projects.jpg" title="Leading Orbit Landing Page" content={["Click here to view Leading Orbit LLC's business landing page"]} />
          <InfoBox className="ani3" href="article/voiceonpage" image="/images/voiceonpage.jpg" title="Personal Trainer Website" content={["Click here to view the VoiceOnPage website"]} />
        </div>
      </div>
    </div>
  )
}

export default Projects