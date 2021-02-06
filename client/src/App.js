import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: ''};
    this.state = {value2: ''};  
    this.state = {data: {} }; // dictionary 
    
    this.handleChangeVal1 = this.handleChangeVal1.bind(this);
    this.handleChangeVal2 = this.handleChangeVal2.bind(this);
    this.fetchResult = this.fetchResult.bind(this);
  }

  handleChangeVal1(event){
    this.setState(
      {value1: event.target.value}
    );
  }

  handleChangeVal2(event){
    this.setState(
      {value2: event.target.value}
    );
  }

  fetchResult(event){
    event.preventDefault();

    const a = this.state.value1; 
    const b = this.state.value2; 

    fetch('http://localhost:5000/add', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        a: parseInt(a),
        b: parseInt(b)
      })
    })
    .then(res => res.json())
    .then(result => {
      this.setState({data: result});
    })
    .catch( e => {
      this.setState({ error: e})
    })
  }

  render() {
    var resultContent = []
    if (this.state.data.result) {
      resultContent = (
        <span>
            result is {this.state.data.result}
        </span>
       )
   } else if (this.state.error) {
       resultContent = (
           <span>
               error is {this.state.error}
           </span>
       )
   }
    return (
      <div className="App">
        <header>
          Add Two values on the back end 
        </header>
        <br>
        </br>
        <form onSubmit={this.fetchResult}>
          <label>
            Value1:  
            <input type="number" value={this.state.value1} onChange={this.handleChangeVal1} />
          </label>
          <label>
            Value2:  
            <input type="number" value={this.state.value2} onChange={this.handleChangeVal2} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        {resultContent}
      </div>
    );
  }
}

export default App;
