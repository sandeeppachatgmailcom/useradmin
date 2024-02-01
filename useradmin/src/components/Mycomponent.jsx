import React, { useEffect, useRef, useState } from 'react';

const MyComponent = (props) => {
    const [state,setState] = useState(10)
    const label = useRef()
    useEffect(()=>{
        console.log('rendering Over ')
    },[state] )
    return (
        <div className="container-flex bg-warning col-1 h-100">
            <h1>My Old Component</h1>
            <h6>{props.name}</h6>
            
            <div className='container-flex d-flex col-12 border justify-content-between '> 
            <button onClick={()=>{
                setState(state+1)
            }} className='btn btn-primary'> + </button>
            
            <h6 ref={label}>{state}</h6> 
            
            <button onClick={()=>{
                setState(state-1);
                console.log(label.current.innerText)
            }} className='btn btn-danger'> - </button>
            </div>
        </div>
    );
};

export const FinalComponent = (FirstComponent) => {
    
    return (props) => {
        
        return (<div className="container-flex h-100 bg-success">
            <h6>Hello</h6>
            <FirstComponent {...props} />
              

        </div>

        )
    }
};


export default MyComponent;
