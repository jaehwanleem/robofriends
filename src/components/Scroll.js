import React from "react";



const Scroll = (props) => { 
    console.log(props);
    //리턴하는 값이 아닌데 리턴을 해야한다 


    return (
        <div style ={{overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
            {props.children}

        </div>
    )//props.children
} 

export default Scroll;