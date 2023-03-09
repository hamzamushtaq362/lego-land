import React from 'react'
import LeftSide from './LeftSide'

export default function Body(props) {
  return (
    <>
      <LeftSide cart={props.cart} getCart={props.getCart} />
    </>
  )
}
