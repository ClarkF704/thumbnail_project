
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
     <div>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen} />
    </div> 
    </Router>
  );
}

export default App;
