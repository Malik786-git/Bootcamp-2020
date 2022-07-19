import React, { useCallback, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleUpdate = () => {
    setCount((count) => count + 1);
  };

  const [todo, setTodo] = useState([]);
  //    1. comment below then use it. so you can see memo use in child component can not be stop the rendering of child component if props is pass this is not ideal case, so we handle it use useCallback hook
  //     const handleAddNewTodo = ()=> {
  //     console.log('add todo');
  //   }

  //    2. comment above then use it callBack.
  const handleAddNewTodo = useCallback(() => {
    console.log("add todo");
  }, [todo])

  return (
    <div>
      <ChildUseCallback todo={todo} AddNew={handleAddNewTodo} />
      <h4>counter {count}</h4>
      <button onClick={handleUpdate}>update</button>
    </div>
  );
};

export default UseCallback;
