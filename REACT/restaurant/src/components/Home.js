import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restaurant from './Restaurant'



// function Home() {

//     //***usestate is used */
//     const [hotels, setHotels] = useState([])

//     //**use effects used for fetching */
//     useEffect(() => {
//         const fetchData = async () => {
//             await fetch('/restaurants.json')
//                 .then((res) => res.json())
//                 .then((data) => setHotels(data.restaurants))
//         }
//         fetchData();

//     }, [])

//     console.log("data is....", hotels);



//     return (
//         //***fetching data **
//         <>
//             {hotels ? (
//                 <Row>
//                     {hotels.map((item) => (
//                         //    <h1>{item.name}</h1>))}  for displaying checking
//                         <Col sm={12} md={8} lg={6} xl={3} >
//                             <Restaurant item={item} />
//                         </Col>))}
//                 </Row>
//             ) : null}
//         </>
//     )
// }

// export default Home


//USING REDUX

import {listRestaurants} from '../actions/restaurantActions'
import  {useDispatch, useSelector} from 'react-redux'


function Home() {

    const dispatch= useDispatch()
    const restaurantReducer = useSelector(state => state.restaurantReducer)
    const {restaurants} = restaurantReducer

    
    useEffect(() => {
         dispatch(listRestaurants())
        

    }, [dispatch])

    
    return (
        
        <>
            {restaurants ? (
                <Row>
                    {restaurants.map((item) => (
                        <Col sm={12} md={8} lg={6} xl={3} >
                            <Restaurant item={item} />
                        </Col>))}
                </Row>
            ) : null}
        </>
    )
}

export default Home
