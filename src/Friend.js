import React from "react";

    // const Friend = (props)=>{
    //         return(
    //             <>
    //             <h3>이름{props.name}</h3>
    //             <h3>나이{props.age}</h3>
    //             <h3>도시{props.city}</h3>
    //             ----------------------------------
    //             </>
    //     )
    // }
    // export default Friend;

    class Friend extends React.Component{
        render(){
            const{name, age, city}=this.props

            return(
                <>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{city}</h3>
                <h3>--------------------</h3>
                </>
            )
        }
    }

    export default Friend;