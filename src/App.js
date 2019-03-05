import React, { Component } from 'react';
import dk from './Denmark.gif';
import es from './spanish.gif';
import SnowStorm from 'react-snowstorm';
import Navigation from './components/Navigation';
import Registration from './components/Registration';
import List from './components/List';
import Scroll from './components/Scroll';

import 'tachyons';
import './App.css';

const initialState = {
      route: 'home',
      isSignedIn: false,
      isLoading: true,
      users: [],
      error: null
    }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount(){
    fetch('https://nameless-ocean-57332.herokuapp.com/list')
      .then((response) => response.json())
      .then(bday => this.setState({users: bday})
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
    
    const {route, users} = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        <img src={dk} className="dk" alt="Danmark"/>
        <img src={es} className="es" alt="Spanien"/>
          {(route === 'home') && 
              <div className="home">  
                <Registration onRouteChange={this.onRouteChange}/>
                <SnowStorm />
                
              </div>}
          {(route === 'list') &&
            <Scroll>
              <List users={users} />              
            </Scroll>}
      </div>
    );
  }
}

export default App;
