import React from 'react';

const Demo = (props) => {
    return  (<div className='card-container'> 
        <h1>Hello</h1>
        <p onClick={props.click}>Im a person {props.name} i am {props.age} years old </p>
        <input type="text" onChange={props.changed} />
    </div>)
};

export default Demo;
