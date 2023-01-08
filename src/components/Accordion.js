import { useState } from "react";

function Accordion({ items }) {
  const [expendedIndex, setExpendedIndex] = useState(1);

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {isExpended && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
