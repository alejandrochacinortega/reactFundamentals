import React from 'react';
import ReactDOM from 'react-dom';

//Class Component
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h2>Hey {txt}</h2>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'This is the default txt'
};

ReactDOM.render(
  <App cat={5}/>, document.getElementById('app')
);

export default App;