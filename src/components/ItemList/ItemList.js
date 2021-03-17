import Item from '../Item/Item'
import React from 'react'

export default function ItemList(props) {
    // console.log(props.items)
    return (
        <>
            {props.items.map( (x,index) =>(
                <Item
                key = {index}
                id = {x.id}
                title = {x.title}
                price ={x.description}
                description ={x.price}
                pictureUrl = {x.pictureUrl}
                />
            ))}
        </>
    )
}
