import React, { Component } from 'react'
import Promt from '../js/Promt.js';
import Shield from '../assests/shield.svg'

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
                <h3><Promt/></h3>
                <h3>Have a good day!</h3>
                <img src={Shield} alt="shield"/>
                </div>
            </div>
        )
    }
}
export default App;