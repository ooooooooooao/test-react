import React, {Component} from "react";
import './Todo.css'

function Todo({user,name,done,description}){
    return(
        <>
            <h3>name:{name}</h3>
            <h4>done:{done ? "finished":"ongoing"}</h4>
            <p>description:{description}</p>
            <h2>{user}</h2>
        </>
    )
}
export default Todo


//class Todo extends Component{
//     constructor(props){
//         super(props)//부모로부터 전달받는 데이터

//         //데이터 초기화
//         this.state={//객체의 멤버변수
            
//                 name:"cleaning",
//                 done:false,
//                 description:"cleaning my room on wekends"
            
//         }
//         console.log(props)
//     }
//     //이벤트 핸들러 함수
//     changeName=()=>{
//         this.setState({name: "learning react"})
//     }
//     render(){
//          const{name, done, description}=this.state
    
//         //html 템플릿=>jsx 문법
//         return(
//             <>
//             <h3>name:{name}</h3>
//             <h4>done:{done ? "finished":"ongoing"}</h4>
//             <p>description:{description}</p>
//             <button type="button" onClick={this.changeName}>이름변경하기</button>
            
//             </>
//         )      
//     }
// }
// export default Todo