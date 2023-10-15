import React from 'react'
import { useDispatch} from 'react-redux'; // dispatches the event to the store and finds out what action is to be taken and uses the appropriate reducer to do the same.
import increment from '../actions'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(1))}>Increase counter</button>
    );
}

export default MyButton;