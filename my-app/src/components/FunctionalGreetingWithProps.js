import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello,  {props.name}. {props.greeting} You have a beautiful {props.object}</h1>;
} 

export default FunctionalGreetingWithProps