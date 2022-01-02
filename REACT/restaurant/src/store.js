import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantReducer'


//***1)
const initialState={};
//***2)
const middleware= [thunk];
//***3)
const reducer= combineReducers({
    restaurantReducer: restaurantListReducer
})

//CREATING STORE
const store= createStore(reducer,initialState,applyMiddleware(...middleware))

export default store