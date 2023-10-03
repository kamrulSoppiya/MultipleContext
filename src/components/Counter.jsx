import { useContext } from "react";
import { counterContext } from "./Context";

export default function CounterComponenets(){
    const {counter1, setCounter1,counter2, setCounter2} = useContext(counterContext);
    console.log('Counter Render');
    return(
        <>
            <div>
                <p>{counter1}</p>
                <button onClick={()=>setCounter1(prev=>prev+1)}>Increment</button>
                <button onClick={()=>setCounter1(prev=>prev-1)}>Decrement</button>
            </div>
            <div>
                <p>{counter2}</p>
                <button onClick={()=>setCounter2(prev=>prev+1)}>Increment</button>
                <button onClick={()=>setCounter2(prev=>prev-1)}>Decrement</button>
            </div>
        </>
        
    );
}

