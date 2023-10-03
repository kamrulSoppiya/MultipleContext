import { useContext } from "react";
import { todoContext } from "./Context";

function FormComponent(){
    const { todos, setTodos, text, setText } = useContext(todoContext);
    console.log('Form Render');
    return(
        <>
            <h4>Form</h4>
            <input value={text} onChange={e => setText(e.target.value)} style={{height:'50px',marginLeft:'10px'}}/>
            <button onClick={() => {setText('');
            setTodos([{id: todos.length,text: text}, ...todos])}} style={{height:'50px'}}>Add</button>
            <div style={{marginLeft:'40px', display:'block'}}>
                {todos.map(item => (
                    <div key={item.id}>
                    {item.text}
                    </div>
                ))}
            </div>
        </>
    );
}

export default FormComponent;