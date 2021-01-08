import React, { Component } from 'react'
import Promt from '../js/Promt.js';

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      };
      
    };

    
    render() {
        return (
            <div>
                <div className="container">
                <h1><Promt/></h1>
                <p>Have a good day!</p>
                </div>
            </div>
        )
    }
}
export default App;