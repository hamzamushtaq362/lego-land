import React from 'react'
import Body from './Body'

export default function Index(props) {
    return (
        <div>
            <Body cart={props.cart} getCart={props.getCart}  />
            {/* <h1>Index</h1> */}
        </div>
    )
}
