import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users'
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';


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

  handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName,lastName)
  }

  render() {
    // this is an example to showcase the generator testing func... keep for study - not necessary for app.
    const itertator = testing();
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());

    const users = this.props.users
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList users={users.items}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
