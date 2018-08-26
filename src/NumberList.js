import React from 'react'

const NumberList = ({numbers}) => {
  console.log(numbers)
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  )

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default NumberList
