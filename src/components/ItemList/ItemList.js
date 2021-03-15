import Item from '../Item/Item'
import React from 'react'

export default function ItemList(props) {
    return (
        <ul>
            {props.items.map( (x,index) =>(
                <Item key = {index} item = {x} />
            ))}
        </ul>
    )
}
