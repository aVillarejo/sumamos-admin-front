import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
        <Table
            height={400}
            data={this.state.data}
            onRowClick={data => {
              console.log(data);
            }}
          >
            <Column width={70} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>
  
            <Column width={200} fixed>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>
  
            <Column width={200}>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>
  
            <Column width={200}>
              <HeaderCell>City</HeaderCell>
              <Cell dataKey="city" />
            </Column>
  
            <Column width={200}>
              <HeaderCell>Street</HeaderCell>
              <Cell dataKey="street" />
            </Column>
  
            <Column width={300}>
              <HeaderCell>Company Name</HeaderCell>
              <Cell dataKey="companyName" />
            </Column>
  
            <Column width={300}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>
            <Column width={120} fixed="right">
              <HeaderCell>Action</HeaderCell>
  
              <Cell>
                {rowData => {
                  function handleAction() {
                    alert(`id:${rowData.id}`);
                  }
                  return (
                    <span>
                      <a onClick={handleAction}> Edit </a> |{' '}
                      <a onClick={handleAction}> Remove </a>
                    </span>
                  );
                }}
              </Cell>
            </Column>
          </Table>
        </header>
      </div>
    );
  }
}

export default App;
