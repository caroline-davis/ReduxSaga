import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users'


// generator function - it will begin again if called 4 times if while(true) is there. 
function* testing() {
  while(true) {
    yield 1;
    // pretend there is code here :)
    // pretend there is code here :)
    // it would run all these lines of code up until the next yield.
    yield 2;
    yield 3;
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.props.getUsersRequest();
  }

  render() {
    const itertator = testing();
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());

    return (
      <div>test</div>
    );
  }
}

export default connect(null,{
  getUsersRequest
})(App);
