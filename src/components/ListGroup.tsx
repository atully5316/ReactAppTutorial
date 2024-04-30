//component is not currently being used in final product,
//but could be used for a list with a heading

import { useState } from "react";
interface Props {
  items: string[]; //array of strings, each string is an item
  heading: string; //name of the list displayed above it
  onSelectItem: (item: string) => void; //function that executes when item in list is selected
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //interface type included, attributes listed as parameters
  //useState begins with -1 to represent no index on the list has been clicked, updates state with index of clicked item
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //empty tag represents Fragment, makes code seem like single element that can be returned by function
    <>
      <h1>{heading}</h1>
      {
        items.length === 0 && (
          <p>No item found</p>
        ) /*syntax displays text if list has no items*/
      }
      <ul className="list-group">
        {items.map(
          (
            item,
            index //mapping each item to its own index, map function exists for array of strings
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active" //specific syntax found from tutorial video, acts as if statement
                  : "list-group-item" // chooses which item to make active in the list
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
