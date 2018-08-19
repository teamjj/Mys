import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		age:props.age1
  	}
  }
  onMakeOlder(){
  	this.setState({
  		age:this.state.age+3
  	})
  }
  handleGreet(){
  	this.props.greet(this.state.age)
  }
  show(){
  	console.log(this)
  }
  render() {
    return (
     
        <div>
          your name is{this.props.name}
          your hobbies is{this.props.user.hobbies.map((item,i)=>
          	<li key={i}>{item}</li>
          )}
          your age{this.state.age}
          <button onClick={this.onMakeOlder.bind(this)}>submit</button>	
          <hr/>
          <button onClick={this.handleGreet.bind(this)}>show</button>
           <hr/>
          <button onClick={console.log(this)}>greet</button>
       </div>
      
    );
  }
}
Home.propTypes={
	name:PropTypes.string,
	age:PropTypes.number
}
