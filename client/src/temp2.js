import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: ''};
    this.state = {value2: ''}; 
    this.state = {
      apiResponse: ''
    };
    
    this.handleChangeVal1 = this.handleChangeVal1.bind(this);
    this.handleChangeVal2 = this.handleChangeVal2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

 // this.callAPI = this.callAPI.bind(this);  
  }
/* 
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then( res =>
        this.setState({ apiResponse: res })
      )
      .catch(err => err);
  }

  componentWillMount(){
    this.callAPI();
  }
 */

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

  handleSubmit(event) {
    let total = parseFloat(this.state.value1) + parseFloat(this.state.value2)
    alert(total + ' is the answer');
    event.preventDefault();
  }
d
  
  render() {
    return (
      <div className="App">
        <header>
          Add Two values on the back end 
        </header>
        <br>
        </br>
        <form onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default App;
