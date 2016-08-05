import React from 'react';
import ReactDOM from 'react-dom';

//Class Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is the state hey",
      cat: 0
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h2>{this.state.txt}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
);

export default App;