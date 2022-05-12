const ItemValue = (props) => {
  return (
    <div className='ItemValue'>
      <p className={props.p1class + ' ' + props.pclass}>{props.item}</p>
      <p className={props.p2class + ' ' + props.pclass}>{props.value}</p>
    </div>
  )
}

ItemValue.defaultProps = {
  p1class: '',
  p2class: '',
  pclass: '',
}

export default ItemValue
