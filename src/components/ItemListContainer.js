import ItemList from './ItemList/ItemList'
import ItemCount from './ItemCount';
import DetalleItem from './DetalleItem';
function ItemListContainer (props){
    const onAdd = (e,cont)=>{
        alert(`agregaste ${cont} al carrito`);
        cont = 1;
    }
    return (
        <div style={{"display": "flex", "justifyContent":"center", "alignItems":"center", "flexDirection":"column"}}>
            <p> {props.name} </p>
            <DetalleItem/>
            <ItemCount initial={1} stock={4} onAdd={onAdd}/>
            <ItemList items = {props.items}/>
        </div>
    );
}
export default ItemListContainer;