import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Result from './components/result.component';
import JSONdata from './assets/input.json';
import './App.css';
import 'react-tabs/style/react-tabs.css';


const obj = JSON.stringify(JSONdata);
const newObj = JSON.parse(obj)
console.log(newObj)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: newObj.types
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ json: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ json: event.target.value });
    console.log(this.state.json);
  }

  render() {
    const { json } = this.state;
    console.log(json)
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
                json.map((el) => (
                  <Result key={el.form} {...el} />
                ))
              }
            </form>
          </TabPanel>
          <TabPanel>
            <div>
              <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                {/* <input type="submit" value="Submit" /> */}
              </form>
            </div>
          </TabPanel>

        </Tabs>
      </div>
    );
  }
}

export default App;
