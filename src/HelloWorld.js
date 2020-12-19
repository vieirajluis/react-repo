import React from 'react';

const HelloWorld = () =>{
    function sayHello(){
        alert('Hello, World!');
    }

    return (
        <button onClick={sayHello}>Click me in react!</button>
    );
};

export default HelloWorld;
