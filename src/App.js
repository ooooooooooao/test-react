import React, {Component} from 'react';
import Friend from './Friend'

class App extends Component{
  render(){
    // return<Todo></Todo>
    return(
      <>
    <Friend
    name ="sunrise" 
    age={23} 
    city="newyork"></Friend>
    </>
    )
  }
}
export default App 
//여기에 쓰면 잊어버릴 수 있으니 class 옆에 붙여줄 수도 있음(4번줄)
