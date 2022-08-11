import React, { useReducer} from 'react'

/*we creating a  function reduser will be standerd */
 const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
         return {count: state.count +1, showText: state.showText}
         case "toogleShowText":
            return {count: state.count, showText: state.showText}
         default: 
         return state;

    }
 }

const ReducerTutorial = () => {
    //WE USE IT ONLY WITH {USESTATE}
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    //============================
    /*We using a single state diclaration wich will include both of this diclaration in one object*/
     const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
  
    return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => {
            dispatch({type:"INCREMENT"});
            dispatch({type: "togglesShowText"})
        }}>Click Here</button>

        {/* /*This is for useState syntax */ }
        {/* <button
         onClick={() => {
       
        //   setCount(count +1);
        //   setShowText(!showText);


         }}
         >
            Click Here
        </button>
        {showText && <p>This is the text</p>} */}
        {state.showText && <p>This is the text</p>}
    </div>
  )
}

export default ReducerTutorial