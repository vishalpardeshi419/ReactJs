import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import { CardList } from '/components/card-list/card-list.component';

import Demo from './components/Person/Demo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
// constructor() {
// super();

// this.state = {
// monsters: [],
// searchField :''   
// };
// }

// componentDidMount() {
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(users => this.setState({ monsters: users}));  
// }

state = {
  person : [
      {id : '1', name : 'vishal', age: 28},
      {id : '2', name : 'Data', age: 12}
  ],
  otherState : 'some Other value',
  showPersons: false
}

switchNameHandler = (newName) => {
  this.setState({
    person : [
      {name : newName, age: 28},
      {name : newName, age: 12}
    ]
  })
}

nameChangeHandler = (event, id) => {
const personIndex = this.state.person.findIndex(p => {
  return p.id === id;
})

const person = {
  ...this.state.person[personIndex]
};

// const person  = Object.assign({}, this.state.persons[personIndex]);

person.name = event.target.value;

const persons = [...this.state.person]
persons[personIndex] = person;

this.setState({ person : persons})
}

togglePersonsHandler = () =>  {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

deletePersonsHandler = (personIndex) => {
  // const persons = this.state.person.slice();
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

render() { 
// const { monsters, searchField} = this.state;
// const filteredMonsters = monsters.filter(monster =>
//     monster.name.toLowerCase().includes(searchField.toLowerCase())
//   ) 

const style = {
   backgroundColor: 'white',
   font: 'inherit',
   border: '1px solid blue',
   padding: '8px'
}

let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {
        this.state.person.map((person, index) => {
        return <ErrorBoundary key = {person.id}>
          <Demo 
          click={() => this.deletePersonsHandler(index)}
          name={person.name}
          age = {person.age}           
          changed={(event) => this.nameChangeHandler(event, person.id)}/>
        </ErrorBoundary>
        })
      }      
    </div>
  )
}

return (
<div className="App">    
  <button onClick={this.togglePersonsHandler} style={style}> Swith Name </button>
  {/* {
    this.state.showPersons === true ?
    <div>
      <Demo click = {this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}
          name={this.state.person[0].name}
          age="01">Data
      </Demo>
    </div> : null
  } */}
  
    
  {/* <Demo name="NIshank" age="10"></Demo>
  <Demo name="Demo" age="11"></Demo> */}
    
  {persons} 
</div>
);
} 
}

export default App;
