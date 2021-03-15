import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    new Promise((bien, mal)=>{
      setTimeout(() => {
        // bien(['pera','manzama','uva','papaya']);
        bien(['Articulo: celular','marca: iphone','precio: $5000000','observacion: usado','stock:3']);
      }, 2000);
    })
    .then(res =>
      setItems(res)
    );
  });
  return (
    <>
      <NavBar />
      <ItemListContainer name="lista de productos" items = {items}/>
    </>
  );
}
export default App;
