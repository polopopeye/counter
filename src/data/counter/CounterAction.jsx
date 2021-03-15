
export const incrementCounter = (amount) => (dispatch) => {
dispatch({
    type:'INCREMENT',
    payload:amount
        });
}

export const decrementCounter = (amount) => (dispatch) => {
dispatch({
    type:'DECREMENT',
    payload:amount
        });
    
}