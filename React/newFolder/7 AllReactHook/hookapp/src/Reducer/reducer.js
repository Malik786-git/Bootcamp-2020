const reducer = (value, action) => {
   switch (action) {
       case "increment":
        return value+1;
       case "decrement":
        return value-1;
       default:
        throw new Error();
  
   }
}

export default reducer
