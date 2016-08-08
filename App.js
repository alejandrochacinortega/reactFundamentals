import React from 'react';
import ReactDOM from 'react-dom';

//Class Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "This is the state hey",
      update: this.update.bind(this)
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
        <Widget txt={this.state.txt} update={this.state.update}/>
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update} />
      <h2>{props.txt}</h2>
    </div>
  )
};

ReactDOM.render(
  <App />, document.getElementById('app')
);

export default App;