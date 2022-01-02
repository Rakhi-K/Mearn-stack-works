import logo from './logo.svg';
import './App.css';
import Random from './Random'
// import Random from './Random.css';
import {useState} from 'react'


//1)   ***IMPORTING FILES***

// function App() {
//   return (
//     <div className="App">
//         <Random/>
//     </div>
//   );
// }

// export default App;



//2)    ***DYNAMIC CONTENT CALLING***

// function App() {
//  const  name='ram'
//  const  name1=['Ram','Revi','Seeta']

//   return (
//     <div className="App">
//          <h1>{name}</h1>
//          <h1>{name1}</h1>
//     </div>
//   );
// }

// export default App;



//3)   ***ARRAY OF OBJECTS-  BY MAPPING ***
// function App() {
//   const  details=[
//     {name:'Rakhi', age:'25'},
//     {name:'Maya', age:'30'},
//     {name:'Reghu', age:'35'}
//   ]
  
 
//    return (
//      <div className="App">
//            {details.map(item=>(
//                <>
//                   <h2>{item.name}</h2>
//                       {item.age}
//                </>
//              ))
//            }
//      </div>
//    );
//  }
 
//  export default App;



//4)  ***REACT HOOKS- {useState}***

// function App() {
  // **const[initialState , setState]= useState(1)

//   const[number , setNumber]= useState(1)

//   function increment(){
//     setNumber(number+1)
//   }
  
 
//    return (
//      <div className="App">
            
//             <p>{number}</p>

//     {/* FUNCTION IS CALLED */}
//           <button onClick={increment}>Click Me!!!</button>
   

//    {/* ** AS ONELINE- IN LINE** */}
//           <button onClick={()=>setNumber(number-1)}> Dont Click Me!!!</button>

//           <button  onClick={()=>setNumber(0)}>Reset!!!</button>
//      </div>
//    );
//  }
 
//  export default App;


//  ***PROPERTIES-  PROPS ***


// function App() {
// const name ='Reema'
// const name1 ='Esha'

//   return (
//     <div className="App">
//         <Random value={name} 
//                 item={name1}/>
//     </div>
//   );
// }

// export default App;

//SPREAD OPERATOR
function App() {
  const names =["Reema","abc"]
 console.log(...names);
  
    return (
      <div className="App">
          
      </div>
    );
  }
  
  export default App;


