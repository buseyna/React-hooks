// import React, {useState, } from 'react'
import React, {useState, createContext} from 'react'
import Login from "./Login";
import User from "./User";

//[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]

// function ContextTutorial() {
//     const [username, setUsername] = useState('');
//   return (
//     <div>
//         <Login setUsername={setUsername}/> <User username={username}/>
//     </div>
//   )
// }

// export default ContextTutorial

//======================================================
export const AppContext = createContext(null);

function ContextTutorial() {
    const [username, setUsername] = useState('');
  return (
    <div>
        <AppContext.Provider value={{username,setUsername}}>
        <Login /> <User />
        </AppContext.Provider>
    </div>
  )
}

export default ContextTutorial