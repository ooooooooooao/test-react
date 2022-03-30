import React,{Component} from "react";

// class Animal extends React.Component{
//     state={
//         type:"cat",
//         name:"meyow",
//         size:"small",
//         sound:"low",
//         appearence:"cute"
//     }
//     render(){
//         //state props 값을 조회
//         const{type,name,size,sound,appearence}=this.state
//         return(
//             <>
//             <h1>동물 정보</h1>
//             <h3>종류-{type}</h3>
//             <h3>이름-{name}</h3>
//             <h3>크기-{size}</h3>
//             <h3>소리-{sound}</h3>
//             <h3>생김새-{appearence}</h3>
//             </>
//         )
            
        
//     }
// }

//props 객체=>{type,name,size,sound,appearence}
function Animal({type,name,size,sound,appearence}){
    return(
        <>
            <h1>동물 정보</h1>
            <h3>종류-{type}</h3>
            <h3>이름-{name}</h3>
            <h3>크기-{size}</h3>
            <h3>소리-{sound}</h3>
            <h3>생김새-{appearence}</h3>
        </>
    )
}

// function Animal({props}){
//     return(
//         <>
//             <h1>동물 정보</h1>
//             <h3>종류-{props.type}</h3>
//             <h3>이름-{props.name}</h3>
//             <h3>크기-{props.size}</h3>
//             <h3>소리-{props.sound}</h3>
//             <h3>생김새-{props.appearence}</h3>
//         </>
//     )
// }

export default Animal