import { useState } from "react";
interface Props {
    items: string[];
    heading: string;
}


function ListGroup(props: Props) {
    let items = [
        'New York',
        'San Francisco',
        'San Diego',
        'Tokyo',
        'Paris'
    ];
    const [selectedIndex,setSelectedIndex] = useState(-1)
    const getMessage = () => {
        return items.length === 0 && <p>No item found</p>;
    }
    //Event handler

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item,index) => (
            <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } onClick={ () => {
             setSelectedIndex(index);
            }}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
