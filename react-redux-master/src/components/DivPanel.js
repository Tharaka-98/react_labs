import React from 'react'
import { useSelector } from 'react-redux'; // useSelector is used to select the state from the store whose value you want to access.

const DivPanel = () =>{
    let counterVal = useSelector(state => state.counter)
    return (
        <div>
            The present value of counter is {counterVal}
        </div>
    );
}

export default DivPanel;
