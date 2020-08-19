import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators}/>
      </div>
    )
  }
}

export class SenatorTable extends Component {
  render() {
    let senators = this.props.senators.map((element) => <SenatorRow senator={element}/>)

    return (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senators}
        </tbody>
      </table>
    )
  }
}

export class TableHeader extends Component {
  render() {
    let tableValues = this.props.cols.map((element) => {
      return (<th key={element}>{element}</th>)
    })
  
    return (
      <thead>
        <tr>
          {tableValues}
        </tr>
      </thead>
    )
  }
}

export class SenatorRow extends Component {
  render() {
    let senator = this.props.senator;
    return (
      <tr key={senator.id}>
        <td>{senator.name}</td>
        <td>{senator.party.charAt(0) + " - " + senator.state}</td>
        <td><a href={"tel:"+senator.phone}>{senator.phone}</a></td>
        <td><a href={"https://twitter.com/" + senator.twitter}>@{senator.twitter}</a></td>
      </tr>
    )
  }
}