// import React from "react";//라이브러리 호출

// //비구조화 할당 => 객체의 프로퍼티 값들을 변수에 풀어서 복사해준다
// function Person({name,age}){ // function Person = ({name, age}) => {}

//   return (
//     <>
//     <h3>{name}</h3>
//     <h4>{age}</h4>
//     </>
//   )
// }
// export default Person

// function Person(props){

//   return (
//     <>
//     <h3>{props.name}</h3>
//     <h4>{props.age}</h4>
//     </>
//   )
// }
// export default Person

import React from "react";
class Person extends React.Component{
  state={
    name:'sunrise',
    age: 23,
    friends: [
        "victoria",
        "daniel",
        "hanna"
    ]
  }


//이벤트 핸들러 함수
displayInfo=()=>{
  const{name,age,friends}=this.state
  alert(`
  *신상정보*
  --------------
  이름:${name}
  나이: ${age}
  친구: ${friends.join(' , ')}
  `)
}
  render(){    
    return (
    	<>
          <button onClick={this.displayInfo}>신상정보 확인하기</button>
      </>
    )
  }
}
export default Person;

//템플릿 리터럴(template literal)
//`이름 ${name}`

//state//내가 화면에 보여줄 데이터 초기화 시켜줌
//const{}=this.state//프로퍼티 복사

//join//배열을 문자열로 바꿀때 사용