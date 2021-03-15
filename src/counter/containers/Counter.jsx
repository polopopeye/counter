import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {incrementCounter , decrementCounter } from '../../data/counter/CounterAction';



const Counter = ({counter,incrementCounter, decrementCounter}) => {
return (
    <div>
        {counter}
        <button onClick={()=>incrementCounter(5)} >Increment</button> 
        <button onClick={()=>decrementCounter(5)} >Decrement</button> 
    </div>
);  
}

const mapStateToProps = state => {
    return {
  counter: state.Counter.count
};
}

const mapDispatchToProps =  {
    incrementCounter , 
    decrementCounter
}
    



export default compose(connect(mapStateToProps,mapDispatchToProps))(Counter);

