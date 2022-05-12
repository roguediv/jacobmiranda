import InfoBox from "../InfoBox"
import observeElement from "../../global/functions/observeElement"
import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    const observer1 = observeElement('.Contact .trigger6', (e) => {
      document.querySelector(".Contact").classList.add("animate")
      document.querySelector('#scroll-nav .active').classList.remove("active")
      document.querySelector('#scroll-nav :nth-child(4)').classList.add("active")
    })
    return () => {observer1.disconnect();}
  }, []) 
  return (
    <div className='Contact sct' id="scroll-4">
      <h2>Contact.</h2>
      <div className="InfoBox-hldr">

        <div className="info-items-lg">
          <div className="InfoBox">
            <h3>Contact Form</h3>
            <p className="trigger6">Send me an email.</p>
            <div className="form__group field">
              <input type="text" className="form__field" maxLength="50" name="email" placeholder="a" />
              <label htmlFor="name" className="form__label">Email</label>
            </div>
            <div className="form__group field">
              <input type="text" className="form__field" maxLength="50" name="name" placeholder="a" />
              <label htmlFor="name" className="form__label">Name</label>
            </div>
            <div className="form__group field">
              <textarea className="stg_usr_bio form__field mdl-pkg-pkgDescription" rows="1" maxLength="1500" placeholder="A" ></textarea>
              <label htmlFor="name" className="form__label">Message</label>
            </div>
            <button>Send Email</button>
          </div>
          <InfoBox title="Contact Info" content={["This is the email you will recieve a response from. Feel free to contact me directly.", "Email: jake@jacobmiranda.com", "Phone: +1 (555) 555-5555"]} />
        </div>
      </div>
    </div>
  )
}

export default Contact