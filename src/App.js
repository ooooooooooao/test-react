import React, {Component} from 'react';
import NameTag from './NameTag'

// const friends = [
//   {name: 'victoria', age: 13, city: 'seoul'},
//   {name: 'sun', age: 34, city: 'busan'},
//   {name: 'johseb', age: 25, city: 'busan'},
//   {name: 'syleemomo', age: 9, city: 'seoul'},
//   {name: 'hannah', age: 41, city: 'daegu'},
//   {name: 'shara', age: 37, city: 'seoul'},
//   {name: 'martin', age: 28, city: 'daegu'},
//   {name: 'gorgia', age: 39, city: 'seoul'},
//   {name: 'nana', age: 24, city: 'busan'},
//   {name: 'dannel', age: 19, city: 'seoul'},
// ]

// class App extends Component{
//   render(){
//     // return<Todo></Todo>
//     return(
//     <>
//     {friends.map((friend, id) =>{
//       return <Friend key={id} name={friend.name} age={friend.age} city={friend.city}/>
//     })}
//     </>
//     )
//   }
// }

// export default App 
//여기에 쓰면 잊어버릴 수 있으니 class 옆에 붙여줄 수도 있음(4번줄)


// export default class App extends Component{
//   render(){
//     return(
//       <>
//       <NameTag/>
//       </>
//     )
//   }
// }

// function App(){
//   return(
//     <div className='App'>
//       <Animal
//       type='cat'
//       name='meyow'
//       size='small'
//       sound='low'
//       appearence='cute'/>
//     </div>
//   )
// }
// export default App;

class App extends Component{
  state={
    name:'parent'
  }
  changeName=()=>{
    this.setState({name:'parent changed'})
  }
  render(){
    console.log('parent')
    const{name}=this.state
    return(
    <div className='App'>
      <h1>{name}</h1>
      <button type='button' onClick={this.changeName}>change name</button>
      <counter></counter>
    </div>

    )
  }
}
export default App;