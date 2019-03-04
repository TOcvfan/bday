import React, { Component } from 'react';
import dk from './Denmark.gif';
import es from './spanish.gif';
import SnowStorm from 'react-snowstorm';
import Navigation from './components/Navigation';
import Registration from './components/Registration';
import List from './components/List';

import 'tachyons';
import './App.css';

const initialState = {
      route: 'home',
      isSignedIn: false,
      isLoading: true,
      user: [],
      error: null
    }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  list = () => {
    fetch('http://localhost:3001/list')
      .then((response) => response.json())
      .then(data =>// console.log(data),
        this.setState({
          user: data
          
        })
        

      )
      .catch(error => this.setState({ error, isLoading: false}));
  }

  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState(initialState)
    } else if (route === 'list'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  
  render() {
    
    const {route, isLoading, isSignedIn} = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        <img src={dk} className="dk" alt="Danmark"/>
        <img src={es} className="es" alt="Spanien"/>
          {(route === 'home') && 
              <div className="home">  
                <Registration />
                <SnowStorm />
                
              </div>}
          {(route === 'list') &&
            <div className="list">
              <List list={this.list}/>              
            </div>}
      </div>
    );
  }
}

export default App;
