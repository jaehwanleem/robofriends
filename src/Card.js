import React from "react";

const Card = (props) => {
        const {name, email ,id} =props;
    return(

        
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robotprofile' src={`https://robohash.org/${id}?100*100`}/>

            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>


    );

}

export default Card;