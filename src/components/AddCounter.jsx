import { useContext } from "react";
import{ counterContext } from "./Context";
export default function AddCounter(){
    const {counter1,counter2} = useContext(counterContext);

    return(
        <>
            <p>Total AddTwo Data is : {counter1+counter2}</p>
        </>
    );
}