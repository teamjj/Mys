import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
	onGreet(age){
		alert(age);
	}
  render() {
  	const user={
		name:'Tom',
		hobbies:['a','b','c']
	   }
    return (
   
      <div>{this.props.children}</div>
        
    );
  }
}

export default App;
