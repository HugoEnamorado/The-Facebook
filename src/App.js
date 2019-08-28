
import React, {Component} from "react";
import UserProfile from './components/UserProfile/UserProfile'
import Hearts from './components/Hearts/Hearts';
import Comments from './components/Comments/Comments';
import './App.css';
class App extends Component {

state = {
   LikesNumbers: 0,
   CommentsNumbers: 1,
   Comments: [{
      value: "React es otro rollo!!!"

   }]
}

clickHeart = () =>{
 const like = this.state.LikesNumbers
this.setState({ LikesNumbers: likes + 1 })
}

addComment = (newValue) => {
 const comments = this.state.CommentsNumbers
const arrayComments = this.state.Comments
const newComment = {
  value: newValue
}

arrayComments.push(newComment)
 this.setState({ CommentsNumbers: comments + 1})
 this.setState({ Comments: arrayComments })
 this.setState({ valueText: '' })

}

changeText = (value) => {
  this.setState({ valueText: value})
}

render() {
  return ( <div className = "container">
     <UserProfile img = 'https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
     Name = 'Monoku'
     Likes = {this.state.LikesNumbers}
     comments = {this.state.CommentsNumbers}/>
     <Hearts clickHeart ={ this.clickHeart} />    
      <Comments comments = {this.state.Comments }
      addComment = {this.addComment}
      changeText = {this.changeText}
      valueText = { this.valueText} />
      
  </div>

  );
}

}
export default App;























// import React from 'react';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
