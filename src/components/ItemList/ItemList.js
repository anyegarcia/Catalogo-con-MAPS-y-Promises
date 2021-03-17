import Item from '../Item/Item'
import React from 'react'

export default function ItemList(props) {
    // console.log(props.items)
    return (
        <div class="d-flex justify-content-center" style={{"width": "80%;"}}>
            {props.items.map( (x,index) =>(
                <Item
                key = {index}
                id = {x.id}
                title = {x.title}
                price ={x.price}
                description ={x.description}
                pictureUrl = {x.pictureUrl}
                />
            ))}
        </div>
    )
}
