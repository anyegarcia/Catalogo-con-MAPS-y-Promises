import React from 'react'

export default function Item(props) {
    console.log(props)
    return (
        <ul>
            <li>id: {props.id}</li>
            <li>title: {props.title}</li>
            <li>description: {props.description}</li>
            <li>price: {props.price}</li>
            <li><img src={props.pictureUrl}/></li>
        </ul>
    )
}
