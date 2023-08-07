import { useState } from "react";
// typescript interface feature
interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}


function ListGroup({ items , heading , onSelectItem}: Props) {
    
    const [selectedIndex,setSelectedIndex] = useState(-1)
    const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;
    }
    //Event handler

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
            <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } onClick={ () => {
             setSelectedIndex(index);
             onSelectItem(item);
            }}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
