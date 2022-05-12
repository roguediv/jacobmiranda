import React from "react"
import Image from "next/image"
import Link from 'next/link'

const Article = ({article}) => {
  return (
    <div className="Article">
      <div className="content-holder">
        <div className="article-content">
          <article className="scroll-item">
            <div className="title">
              <div className="text" id="top">
                <h1>{article?.title}</h1>
                <p>{article?.desc}</p>
                <p className="author">By {article?.author} | {article?.dateCreated}</p>
              </div>
              <div className="img">
                <Image alt="article profile" src={article?.coverPhoto} layout="fill" objectFit='cover' objectPosition="center" priority/>
              </div>
            </div>
            {genContent(article?.content)}
          </article>
        </div>
        <div className="article-nav">

        </div>
      </div>
    </div>
  )
}

Article.defaultProps = {
  className: '',
}

const genContent = (content) => {
  return (
    <>
    {
      content?.map(e => (
        <>
        {e?.type == "hdr" ? genHeader(e) : <></>}
        {e?.type == "section" ? genSection(e) : <></>}
        </>
      ))
    }
    </>
  )

}

const genHeader = (item) => {
  return (
    <div className="sct-top">
      {item?.removeLink ? <></> : <a href="#top">Back to Top</a>}
      <h2>{item?.title != undefined ? item?.title : <></>}</h2>
      <p>{item?.desc}</p>
    </div>
  )
}

const genSection = (item) => {
  return (
    <section>
      {item?.title != undefined ? <h3>{item?.title}</h3> : <></>}
      {item?.content?.map((e, i) => (
        <React.Fragment key={i}>
            {e?.type == "paragraph" ? e?.p?.map((x, l) => (<React.Fragment key={l}><p>{x}</p></React.Fragment>)) : e?.type == "image" ? genImage(e) : e?.type == "ul" ? genUl(e, "dots") : e?.type == "cols" ? genSectionCols(e) : e?.type == "link" ? <a className="resource" href={e?.href} rel="noreferrer" target="_blank">{e?.text}</a> : <></>}
        </React.Fragment>
      ))}
    </section>
  )
}

const genSectionCols = (item) => {
  return (
    <div className="cols">
      {item?.cols?.map((e, i) => (
        <React.Fragment key={i}>
          <div className="col-item">
            {e?.title != undefined ? <h3>{e?.title}</h3> : <></>}
            {e?.desc != undefined ? <p>{e?.desc}</p> : <></>}
            {e?.ul != undefined ? genUl(e?.ul) : <div>test</div>}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

const genImage = (item) => {
  return (
    <div className="figure">
      <div className="img">
        <Image alt={item?.title != undefined ? item?.title : "photo"} src={item?.src} layout="fill" objectFit='cover' objectPosition="center" />
      </div>
      <div className="text">
        <h3>{item?.title != undefined ? item?.title : "Figure"}</h3>
        <p>{item?.desc}</p>
      </div>
    </div>
  )
}

const genUl = (item, className = "") => {
  return (
    <ul className={className}>
      {item?.li?.map(e => (
        e?.type != "ul" ? <li>{e}</li> : genUl(e)
      ))}
    </ul>
  )
}

export default Article
