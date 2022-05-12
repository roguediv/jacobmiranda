import GenBtn from "./GenBtn"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

const Nav = () => {
  return (
    <>
      <div className="nav-1 nav">
        <div className="page-title">
          <h2>Portfolio</h2>
        </div>
        <div className="text">
          <h5>Hello There!</h5>
          <p className="sm">This portfolio is meant to behave like a modern webapp. Please test it&apos;s responsive design and use it as an example of the quality of work that Jacob would produce for you.</p>
        </div>
        {/* <div className="search">
          <input type="text" placeholder="Search for People and Posts..." />
        </div>
        <div className="profile">
          <GenBtn text="Signup" />
        </div> */}
      </div>
      <div className="nav-2 nav">
        <div className="top">
          <div className="burger">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div className="ul-hldr">

          <ul>
            <li className="active"><GenBtn icon="AiFillHome" text="Home" href="https://jacobmiranda.com" /></li>
            <li><GenBtn icon="AiFillInfoCircle" text="About" href="./" /></li>
            <li><GenBtn icon="IoPaperPlane" text="Blogs" href="./" /></li>
          </ul>
          <ul id="scroll-nav">
            <li className="active"><GenBtn text="Top" href="#scroll-1" /></li>
            <li><GenBtn text="Experience" href="#scroll-2" /></li>
            <li><GenBtn text="Projects" href="#scroll-3" /></li>
            <li><GenBtn text="Contact" href="#scroll-4" /></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Nav
