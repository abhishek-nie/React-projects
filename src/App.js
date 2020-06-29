import React,{useReducer} from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import ListRederer from "./components/ListRederer";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import ParentComp from "./components/ParentComp";
import RefDemo from "./components/RefDemo";
import InputComponent from "./components/InputComponent";
import FRParent from "./components/FRParent";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Portal from "./components/Portal";
import ClickCounter from "./components/ClickCounter";
import Hover from "./components/Hover";
import RPComponent from "./components/RPComponent";
import RPHover from "./components/RPHover";
import RPClick from "./components/RPClick";

import ContextA from "./components/ContextA";
import FetchData from "./components/FetchData";
import PostData from "./components/PostData";
import HookUseState from "./components/HookUseState";
import HookUseStateObject from "./components/HookUseStateObject";
import HookUseStateArray from "./components/HookUseStateArray";
import HookUseEffect from "./components/HookUseEffect";
import HookUseEffectWithCondition from "./components/HookUseEffectWithCondition";
import HookuseEffectCounter from "./components/HookuseEffectCounter";
import HookUseEffectAxios from "./components/HookUseEffectAxios";
// import UseReducerWithContextA from "./components/UseReducerWithContextA";
// import UseReducerWithContextB from "./components/UseReducerWithContextB";
// import UseReducerWithContextC from "./components/UseReducerWithContextC";
import UseReducerDateFetch from "./components/UseReducerDateFetch";

// export const CountContext = React.createContext()

// const intialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return intialState;
//     default:
//       return state;
//   }
// };
function App() {
  // const [count,dispatch] = useReducer(reducer,intialState)
  return (
    // <CountContext.Provider value={{countVaule : count, countDispatch : dispatch}}>
    <div className="App">
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello name ="AK" heroName ="Baba">
        <p>how are u?</p>
      </Hello> */}
      {/* <Hello name ="soni"/>
      <Hello name= "Abhishek"/> */}
      {/* <EventBinding/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <ListRederer/> */}
      {/* <StyleSheet primary = {true}/> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <FragmentDemo /> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefDemo></RefDemo> */}
      {/* <InputComponent></InputComponent> */}
      {/* <FRParent></FRParent> */}
      {/* <ErrorBoundary>
      <Hero Hero="supermane" />
      </ErrorBoundary>
     <ErrorBoundary>
     <Hero Hero="Joker" />
     </ErrorBoundary> */}
      {/* <Portal />  */}
      {/* <ClickCounter />
     <Hover></Hover> */}
      {/* <RPComponent>
     {(count, incrementCount)=>(<RPHover count={count} incrementCount={incrementCount}/>)}
     </RPComponent>
     <RPComponent>
     {(count, incrementCount)=>(<RPClick count={count} incrementCount={incrementCount}/>)}
     </RPComponent> */}

      {/* <ContextA />      */}
      {/* <FetchData></FetchData> */}
      {/* <PostData></PostData> */}
      {/* <HookUseState></HookUseState> */}
      {/* <HookUseStateObject></HookUseStateObject> */}
      {/* <HookUseStateArray></HookUseStateArray> */}
      {/* <HookUseEffect></HookUseEffect> */}
      {/* <HookUseEffectWithCondition></HookUseEffectWithCondition> */}
      {/* <HookuseEffectCounter></HookuseEffectCounter> */}
      {/* <HookUseEffectAxios></HookUseEffectAxios> */}
      {/* Count ={count}
      <UseReducerWithContextA></UseReducerWithContextA>
      <UseReducerWithContextB></UseReducerWithContextB>
      <UseReducerWithContextC></UseReducerWithContextC>
    </CountContext.Provider> */}
    <UseReducerDateFetch></UseReducerDateFetch>
    </div>
  );
}

export default App;
