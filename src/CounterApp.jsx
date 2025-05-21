import { useState } from 'react';   


export const CounterApp = ({ value }) => {
    
    
    const [ counter, setCounter ] = useState( 0 );


    function handleAdd(event) {
    //    console.log(event);
    setCounter((c) => c + 1);

    }

    return (
    <>
    <h1>Counter App</h1>
    <h2> { counter } </h2>
    <button
    className="btn btn-primary" 
    onClick={handleAdd} >
    +1</button>
    </>
  )
}



export default CounterApp
