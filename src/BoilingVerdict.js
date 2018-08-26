import React from 'react'

const BoilingVerdict = ({celsius}) => {
  if (celsius >= 100) {
    return <p>The water will boil.</p>
  }
  return <p>The water will not boil.</p>

}

export default BoilingVerdict
