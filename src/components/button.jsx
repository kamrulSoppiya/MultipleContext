import { useContext } from "react";
import context from "./Context";

function Button(){
    const {setCount,setCount1} = useContext(context);

    return(
        <>
            <div>
                <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
                <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            </div>

            <div>
                <button onClick={()=>setCount1(prev=>prev+1)}>Increment</button>
                <button onClick={()=>setCount1(prev=>prev-1)}>Decrement</button>
            </div>
        </>
   );
}

export default Button;