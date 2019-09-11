import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Result from './components/result.component';
import JSONdata from './assets/input.json';
import './App.css';
import 'react-tabs/style/react-tabs.css';


// parse JSON file to JS object
const obj = JSON.stringify(JSONdata, null, 4);
const newObj = JSON.parse(obj)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: newObj.types,
      text: obj
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {

    this.setState({ text: event.target.value  });

  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = JSON.parse(this.state.text)
    this.setState( {json: obj.types}  );
  }

  render() {
    const { json } = this.state;
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Result</Tab>
            <Tab>Config</Tab>
          </TabList>
          <TabPanel>
            <form className='form'>
              {
                json.map((el, idx) => (
                  <Result key={idx+el.form} {...el} />
                ))
              }
            </form>
          </TabPanel>
          <TabPanel>
            <div>
              <form  onSubmit={this.handleSubmit}>
                <textarea cols="50" rows="20" value={this.state.text} onChange={this.handleChange} />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </TabPanel>

        </Tabs>
      </div>
    );
  }
}

export default App;
