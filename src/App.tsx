import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/home';
import Navigation from './Components/Navigation';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
       <div>
         <Navigation/>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/about" exact={true} component={About}/>
        <Route path="/contact" exact={true} component={Contact}/>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
