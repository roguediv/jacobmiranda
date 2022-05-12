import InfoBox from "../InfoBox"
import observeElement from "../../global/functions/observeElement"
import { useEffect } from "react"

const Experience = () => {
  useEffect(() => {
    const observer = observeElement('.Experience .trigger2', (e) => {
      document.querySelector(".Experience").classList.add("animate")
      document.querySelector('#scroll-nav .active').classList.remove("active")
      document.querySelector('#scroll-nav :nth-child(2)').classList.add("active")
    })
    return () => {observer.disconnect()}
  }, []) 
  return (
    <div className='Experience sct' id="scroll-2">
      <h2>Experience.</h2>
      <div className="InfoBox-hldr">
        <InfoBox title="Well-Rounded Skillset" content={
          [
            "Jacob has a large variety of computer science and design skills.",
            "Most of Jacob's experience is with web development. Jacob has built projects involving dynamic page generation using PHP. He also have experience with projects utilizing WordPress and other website frameworks. ", 
            "Jacob's a fast learner and have a complex understanding of JavaScript. This makes it very easy for Jacob to pick up an ongoing project requiring a technology he's not familiar with. For new projects, Jacob will discuss a variety of options. That way, you can decide what kind of website works best for your business needs. ",
          ]
          } />
          <div className="info-items-lg">
            <InfoBox className="trigger2" href="#scroll-3" image="/images/projects.jpg" title="View My Projects" content={["Click here to view my projects"]} />
            <InfoBox title="Mobile Development" content={["Jacob builds his websites with a mobile-first mindset. More people browse the internet on phones today than ever before. It's more important than ever to code responsive web designs that work well on every device.", "The primary framework that Jacob uses is the React Framework. The great thing about React is that you can reuse much of the code to create a mobile app - using React Native. React Native apps work on both iOS and Android devices. Developing this way saves Jacob's clients a lot of money on their business.", "Jacob also knows Objective-C/Swift (iOS Native) and Java (Android Native). This is great for clients who want the most efficient and best-looking mobile app."]} />
            <InfoBox title="Adobe Programs" content={["Jacob uses adobe applications to create and edit assets for his clients. Adobe Illustrator is a program for creating responsive SVG icons used on websites. Adobe Photoshop professionally molds photos before compressing them for faster load times. Adobe Premiere Pro edits videos together for websites, leading to improved user engagement.", "Jacob attended Douglas Anderson (an art high school) for photography and videography. Douglas Anderson taught Jacob the skills required for these adobe applications. Jacob has been using the adobe suite for over ten years, so rest assured that his creative work maintains quality.", "Jacob utilizes these programs and more when developing websites. There is no need for outsourcing work, reducing the cost for Jacob's clients."]} />
            <InfoBox href="#scroll-4" image="/images/contact.jpg" title="Let's Work Together" content={["Click here to contact Jacob"]} />
          </div>
          <InfoBox title="SEO and Marketing" content={
          [
            "90% of customers google your company before deciding to buy. It's critical that your business is easy to find on google and that your reputation is positive. Jacob uses keywords and metadata to rank your web pages higher in search engines. When googled, Jacob will ensure that your company is the first result.", 
            "Jacob takes advantage of Google My Business, Google Ads, Facebook Ads, ad listings, and many more resources to bring in more customers and rank your website.",
            "Good public reviews for your service is a must. Jacob knows the best review platforms to use. He will give you tips in engaging your customers to leave positive reviews.",
            "It's common for Jacob's websites to have the first page of google full of results about your company. These websites designed by Jacob often have hundreds of five-star Google reviews, Trustpilot Reviews, and countless articles written about them. "
          ]
          } />
      </div>
    </div>
  )
}

export default Experience
