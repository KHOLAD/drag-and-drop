import React from "react";
import "./App.css";

const items = [{ name: "John" }, { name: "Smith" }, { name: "Bob" }];
let prevX = -1;

const dragover = (event) => {
  event.preventDefault();

  if (prevX === -1) {
    prevX = event.pageX;
    return false;
  }

  const draggedElement = document.querySelector(".dragging");
  event.currentTarget.parentNode.insertBefore(
    draggedElement,
    prevX < event.pageX ? event.currentTarget.nextSibling : event.currentTarget
  );
  prevX = event.pageX;
};

const dragstart = (event) => {
  event.currentTarget.classList.add("dragging");
};

const drop = (event) => {
  console.log("drop");
};

const dropEnd = (event) => {
  console.log("end");
  event.currentTarget.classList.remove("dragging");
};

function App() {
  return (
    <div className="App">
      {items.map((item, i) => {
        return (
          <div
            onDragEnd={dropEnd}
            onDragStart={dragstart}
            onDragOver={dragover}
            onDrop={drop}
            draggable="true"
            className="box"
            key={item.name + "-" + i}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
