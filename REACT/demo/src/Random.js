import React from 'react'

// function Random(props){             - 1) here in functn prop is passed
//      return(
//          <div className="Random">
//              <h1>Hello</h1>
//              <p>{props.value}</p>     //2)  and then prop.value is called
//              <p>{props.item}</p>

          

//          </div>
//      )
// }

// export default Random;

   /* else DEstructured method of PROP */

   function Random({value,item}){    //here in function- value ,item passed- no prop
    return(
        <div className="Random">
            <h1>Hello</h1>
            <p>{value}</p>
            <p>{item}</p>

         

        </div>
    )
}

export default Random;

