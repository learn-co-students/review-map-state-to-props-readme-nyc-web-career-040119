import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  debugger;
  return { items: state.items }
}

export default connect(mapStateToProps)(App);

//we can change the names here and not have it effect functionality

// const vanilla = (milkshake) => {
//   debugger;
//   return { items: milkshake.items }
// }
//
// export default connect(vanilla)(App);

//we can even shorten mapStateToProps() down to an anonymous arrow function and pass it directly to connect()
// export default connect(state => ({ items: state.items}))(App)

//we can change the key of the return as well

//const mapStateToProps = (state) => {
  //return {orangePeel: ['a', 'b', 'c']}
//}
