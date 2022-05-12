import React from 'react'
import Link from 'next/link'
import GenBtn from '../global/GenBtn'
import Image from "next/image"
import { FaGamepad, FaPeopleCarry } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"

const InfoBox = (props) => {
  if (props.href == "") {
    return (
      genInfoBox(props)
    )
  } else {
    return (
      <Link href={props.href}>
        {genInfoBox(props)}
      </Link>
    )
  }
}

InfoBox.defaultProps = {
  className: '',
  icon: '',
  title: 'New InfoBox',
  content: ['InfoBox Text'],
  buttonText: [''],
  buttonClass: ['', 'var-2'],
  image: "",
  href: "",
}

const genInfoBox = (props) => {
  var hrefClass = props.href != "" ? " isLink" : "";
  var img = "";
  var imgClass = "";
  if (props.image != "") {
    img = <Image src={props.image} layout="fill" objectFit='cover' objectPosition="bottom center" />
    imgClass = " hasImg"
  }
  return (
    <div className={'InfoBox ' + props.className + imgClass + hrefClass}>
      {props.icon !== '' ? GenIcon(props) : ''}
      <h3>{props.title}</h3>
      {
        props.content.map((item, i) => {
          return (<p key={i} >{item}</p>)
        })
      }
      {(props.buttonText[0] !== '') ? GenButtons(props) : ''}
      {img}
    </div>
  )
}

const GenIcon = (props) => {
  console.log(props.icon)
  if (props.icon === "FaGamepad") {
    return (<FaGamepad />)
  } else if (props.icon === "FaPeopleCarry") {
    return(<FaPeopleCarry />)
  } else if (props.icon === "BsGearFill") {
    return(<BsGearFill />)
  } else {
    return null
  }
}

const GenButtons = (props) => {
  return (
    <div className="buttons">    
      {
      props.buttonText.map((text, i) => {
        return (<GenBtn text={props.buttonText[i]} className={props.buttonClass[i]} key={i} />)
      })
      }
    </div> 
  )
}

export default InfoBox
