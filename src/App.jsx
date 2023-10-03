import AddCounter from "./components/AddCounter";
import { CounterContextProvider, TodoContextProvider } from "./components/Context";
import CounterComponenets from "./components/Counter";
import FormComponent from "./components/Form";

function App() {  
  return (
    <div style={{display:"flex"}}>
      <CounterContextProvider>
        <TodoContextProvider>
          <CounterComponenets />
          <AddCounter/>
          <FormComponent/>
        </TodoContextProvider>
      </CounterContextProvider>
    </div>
  )
}
export default App;
