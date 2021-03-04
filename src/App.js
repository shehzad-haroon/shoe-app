import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Product from './Components/Product'
import ProductItem from './Components/ProductItem'
import Nav from './Components/Nav';
function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav/>
        </div>
        <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route exact path="/product" component={Product}/>
        <Route path="/product/:id" component={ProductItem}/>
        <Route path="" component={() => <h1>404 Error</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
