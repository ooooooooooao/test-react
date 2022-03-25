import React, {Component} from "react";

    const Friend = (props)=>{
            return(
                <>
                <h3>이름{props.name}</h3>
                <h3>나이{props.age}</h3>
                <h3>도시{props.city}</h3>
                ----------------------------------
                </>
        )
    }
    export default Friend;