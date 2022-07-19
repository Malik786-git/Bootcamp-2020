import React, { useRef} from 'react'

function UseRef() {
    const inputElement = useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
      inputElement.current.value = 'hello world'
      inputElement.current.style.color = 'red'
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }
  
export default UseRef
