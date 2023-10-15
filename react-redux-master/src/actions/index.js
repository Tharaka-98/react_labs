//actions
{/* val is the value you want to increase the counter by everytime the 
button is clicked. Now that you have your action which defines what is 
to be done, you will create the reducers which will define how it is done. */}

const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}

export default increment;