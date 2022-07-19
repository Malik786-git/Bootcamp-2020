import React, {memo} from 'react'

const ChildUseCallback = ({todo, AddNew}) => {
  console.log('List  is render', todo);
  return (
    <div>
      <h1>List: {todo}</h1>
      <button onClick={AddNew}>click here</button>
    </div>
  )
}

// export default ChildUseCallback;
export default memo(ChildUseCallback);

// with the help of memo, this componenet rendering depend upon props, 
// if we it has no props value so it is not be render again. 

// Now we use useCallback hook to stop rendering if the props pass. becaseu if componenet has prop so it render again and again. this is not ideal case.
