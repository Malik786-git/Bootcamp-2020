import './App.css';
import UseContext from './Context/UseContext';
import UseReducer from './Reducer/UseReducer';
import UseCallback from './UseCallback';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseState from './UseState';
import CustomHook from './CustomHook';

function App() {
  return (
    <div className="App">
              <h1 className='main-heading'>React Hooks</h1>
             <u> <h1>1. useState Hook</h1> </u>
             <UseState/>        
             <u> <h1>2. useEffect Hook</h1> </u>
              <UseEffect/>
             <u> <h1>3. useRef Hook</h1> </u>
             <UseRef/>
             <u> <h1>4. useMemo Hook</h1> </u>
             <UseMemo/>
             <u> <h1>5. useReducer Hook</h1> </u>
             <UseReducer/>
             <u> <h1>6. ContextApi {'&'} useContext Hook</h1> </u>
             <UseContext/>
             <u> <h1>7. useCallback Hook</h1> </u>
             <UseCallback/>
             <u> <h1>8. Custom Hook</h1> </u>
             <CustomHook/>

    </div>
  );
}

export default App;
