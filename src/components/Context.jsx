import React, { useState } from "react";

export const counterContext = React.createContext();

export function CounterContextProvider({children}){
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    return(
        <counterContext.Provider value={{counter1,setCounter1,counter2,setCounter2}}>
            {children}
        </counterContext.Provider>
    );
}
// Second Context Provider
function createTodos() {
    const initialTodos = [];
    let i=0;
      initialTodos.push({
        id: i,
        text: ''
      });
  
    return initialTodos;
}

export const todoContext = React.createContext();
export function TodoContextProvider({ children }) {
    // Define the state and functions for this context
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(createTodos);

    return (
      <todoContext.Provider value={{ todos, setTodos, text, setText }}>
        {children}
      </todoContext.Provider>
    );
  }


