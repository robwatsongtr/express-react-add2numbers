import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ''
    };
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then( data =>
        this.setState({ apiResponse: data })
      )
      .catch(err => err);
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return(
      <div className="App">
        <p className="App-intro">{this.state.apiResponse}</p>        
      </div>
    )
  }

}

export default App;
