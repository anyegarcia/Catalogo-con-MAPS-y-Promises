import React, { useState } from 'react'

export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);

    const Incremnenta = () => {
        if(count < stock){
            setCount(count+1);
        }else{
            alert("lo siento, no hay mas unidades disponibles")
        }
    }
    const Decrementa = () => {
        if(count > 1){
            setCount(count-1);
        }else{
            alert("minimo debes pedir una unidad del producto")
        }
    }
    return (
        <>
            <div>
                <button onClick= {Decrementa}>-</button>
                <input value={ count } style={{"width":"40px"}}/>
                <button onClick= {Incremnenta}>+</button>
                {/* <form onSubmit = { e => onAdd(e,count) }> */}
                    {/* <button type='submit'>Add</button> */}
                {/* </form> */}
            </div>
            <button style={{"width":"80px"}} onClick = { e => onAdd(e,count)}>Add</button>
        </>
    )
}
