import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest } from '../actions/users'
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';


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

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName
    });
  }

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
};

  render() {
    // this is an example to showcase the generator testing func... keep for study - not necessary for app.
    const itertator = testing();
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());
    console.log(itertator.next());

    const users = this.props.users

    const handleCloseAlert = () => {

    };

    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
         <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
            {this.props.users.error}
        </Alert>

        <NewUserForm onSubmit={this.handleCreateUserSubmit} />
        <UserList onDeleteUser={this.handleDeleteUserClick} users={users.items}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest
})(App);
