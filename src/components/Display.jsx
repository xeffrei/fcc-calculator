const Display = (props) => {
  return (
    <div
      className='display'
      data-testid='display'
      id='display'
    >
      {props.value}
    </div>
  )
}

export default Display
