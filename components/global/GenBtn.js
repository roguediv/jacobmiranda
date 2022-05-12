import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {IoPaperPlane} from 'react-icons/io5'

const GenBtn = (props) => {
  if (props.href == '') {
    return (
      <>
        {HTMLButton(props)}
      </>
      
    )
  } else {
    return (
      <Link href={props.href}>
        {HTMLButton(props)}
      </Link>
    )
  }

}

const HTMLButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.icon !== '' ? GenIcon(props) : ''}
      {props.text}
    </button>
  )
}

GenBtn.defaultProps = {
  text: 'Button',
  href: '',
  icon: '',
}

GenBtn.propTypes = {
  text: PropTypes.string.isRequired
}

const GenIcon = (props) => {
  console.log(props.icon)
  if (props.icon === "AiFillHome") {
    return (<AiFillHome />)
  } else if (props.icon === "AiFillInfoCircle") {
    return(<AiFillInfoCircle />)
  } else if (props.icon === "IoPaperPlane") {
    return(<IoPaperPlane />)
  } else {
    return null
  }
}

export default GenBtn