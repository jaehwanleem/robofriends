import React from "react";
import Card from './Card';


const Cardlist = ({ robots }) => { //function 없이 const 로 사용하면 뒤에 return(); 이 붙어야한다 

    const cardArray = robots.map((user, i) => {  //map의 중요성과  power을 느껴보자
        return (
            <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    })
    return (


        <div>
            {cardArray};
        </div>


    )
}

export default Cardlist;